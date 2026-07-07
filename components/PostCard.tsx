import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/site";
import { Icon } from "./Icons";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,31,68,0.12)]"
    >
      <div
        className="relative h-44 overflow-hidden"
        style={!post.heroImage ? { background: "linear-gradient(135deg,#0a1f44,#12305f)" } : undefined}
      >
        {post.heroImage ? (
          <Image
            src={post.heroImage}
            alt={`${post.title} — Jumpify Marketing`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-2xl"
            style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
          />
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-900">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Icon name="clock" width={13} height={13} /> {post.readingTime}
          </span>
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-2.5 text-[1.05rem] font-semibold leading-snug text-navy group-hover:text-gold-dark transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          Read Article <Icon name="arrow" width={15} height={15} />
        </span>
      </div>
    </Link>
  );
}
