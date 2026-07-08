/**
 * Jumpify Marketing — Google Sheets Lead Logger
 * ─────────────────────────────────────────────
 * Paste this entire file into Google Apps Script (script.google.com),
 * then deploy it as a Web App. See the README for step-by-step instructions.
 *
 * Sheet ID: 1QpvGxAunm7bbmuCNcEg5OipeN-qzPvQOeW2T1AjGUDE
 */

var SHEET_ID   = "1QpvGxAunm7bbmuCNcEg5OipeN-qzPvQOeW2T1AjGUDE";
var SHEET_NAME = "Leads";
var TIMEZONE   = "Asia/Karachi"; // PKT

// ── Column layout ──────────────────────────────────────────────────────────
var HEADERS = [
  "Timestamp (PKT)",   // A
  "Date",              // B
  "Time (PKT)",        // C
  "Full Name",         // D
  "Phone / WhatsApp",  // E
  "City",              // F
  "Project",           // G
  "Property Type",     // H
  "Message",           // I
  "Source",            // J
];

var COL_WIDTHS = [185, 110, 90, 155, 155, 125, 195, 160, 280, 110];

// ── doPost: receives JSON from the Next.js API route ──────────────────────
function doPost(e) {
  try {
    var raw  = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    var data = JSON.parse(raw);

    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // First use — build the header row and formatting.
    if (sheet.getLastRow() === 0) {
      setupSheet(sheet);
    }

    // Convert ISO timestamp to PKT
    var now = data.timestamp ? new Date(data.timestamp) : new Date();
    var pktTimestamp = Utilities.formatDate(now, TIMEZONE, "yyyy-MM-dd HH:mm:ss");
    var pktDate      = Utilities.formatDate(now, TIMEZONE, "yyyy-MM-dd");
    var pktTime      = Utilities.formatDate(now, TIMEZONE, "HH:mm:ss");

    sheet.appendRow([
      pktTimestamp,
      pktDate,
      pktTime,
      data.name    || "",
      data.phone   || "",
      data.city    || "",
      data.project || "",
      data.type    || "",
      data.message || "",
      data.source  || "Website Form",
    ]);

    // Refresh row banding every 10 rows
    var lastRow = sheet.getLastRow();
    if (lastRow % 10 === 0) {
      applyRowBanding(sheet, lastRow);
    }

    return ok();
  } catch (err) {
    return fail(err.message);
  }
}

// ── doGet: health-check endpoint ─────────────────────────────────────────
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Jumpify Sheets webhook is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── setupSheet: called once on the first lead submission ─────────────────
function setupSheet(sheet) {
  // Header row
  sheet.appendRow(HEADERS);
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange
    .setBackground("#0a1f44")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11)
    .setVerticalAlignment("middle")
    .setHorizontalAlignment("center");

  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // Column widths
  for (var i = 0; i < COL_WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, COL_WIDTHS[i]);
  }

  // Auto-filter on the header row
  sheet.getRange(1, 1, 1, HEADERS.length).createFilter();

  // Named filter views
  createNamedFilter(sheet, "Filter by City",    6);
  createNamedFilter(sheet, "Filter by Project", 7);
  createNamedFilter(sheet, "Filter by Date",    2);
  createNamedFilter(sheet, "Filter by Source", 10);
}

// ── createNamedFilter ─────────────────────────────────────────────────────
function createNamedFilter(sheet, name, sortCol) {
  try {
    var request = {
      addFilterView: {
        filter: {
          title: name,
          range: {
            sheetId: sheet.getSheetId(),
            startRowIndex: 0,
            startColumnIndex: 0,
            endColumnIndex: HEADERS.length,
          },
          sortSpecs: [{ dimensionIndex: sortCol - 1, sortOrder: "ASCENDING" }],
        },
      },
    };
    Sheets.Spreadsheets.batchUpdate({ requests: [request] }, SHEET_ID);
  } catch (e) {
    Logger.log("Named filter skipped (" + name + "): " + e.message);
  }
}

// ── applyRowBanding ───────────────────────────────────────────────────────
function applyRowBanding(sheet, lastRow) {
  try {
    var dataRange = sheet.getRange(2, 1, lastRow - 1, HEADERS.length);
    var bandings  = dataRange.getBandings();
    for (var i = 0; i < bandings.length; i++) bandings[i].remove();
    dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false);
  } catch (e) { /* non-fatal */ }
}

// ── Helpers ───────────────────────────────────────────────────────────────
function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function fail(msg) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: false, error: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── initSheet: run MANUALLY if the sheet already has data ─────────────────
function initSheet() {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    setupSheet(sheet);
  }
}
