import { createFileRoute } from "@tanstack/react-router";

import { PostCard } from "@/components/site/PostCard";
import { POSTS } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "SEO Blog — Guest Posting, Link Building & Organic Traffic Tips | RankBoost SEO" },
      { name: "description", content: "The best SEO strategy for small business websites, how to increase organic traffic fast, and guest posting and link building tips." },
      { property: "og:title", content: "RankBoost SEO Blog" },
      { property: "og:description", content: "SEO strategy for small business websites, organic traffic growth and guest posting tips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="container-site py-16 md:py-20">
      <p className="eyebrow text-muted-foreground">Blog</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
        SEO tips that <span className="gold-underline">actually work</span>.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Practical guides on SEO strategy for small business websites, guest posting, link building and growing organic traffic — no jargon.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
