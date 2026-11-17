import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Gauge, Link2, MessageCircle, Search, ShieldCheck, TrendingUp, Users } from "lucide-react";

import heroImage from "@/assets/hero-guest-posting-vip.jpg";
import profilePhoto from "@/assets/sikandar-ali-profile.jpg.asset.json";
import { FreelanceActions } from "@/components/site/FreelanceActions";
import { LiveProjects } from "@/components/site/LiveProjects";
import { MeetTheExpert } from "@/components/site/MeetTheExpert";
import { PostCard } from "@/components/site/PostCard";
import { PricingCards } from "@/components/site/PricingCards";
import { Button } from "@/components/ui/button";
import { POSTS } from "@/lib/posts";
import { SERVICE_IMAGES } from "@/lib/site-images";
import { FIVERR_GIG, PACKAGES, SEO_KEYWORDS, SERVICES, SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEO Setup Services & Guest Posting from $10 | RankBoost SEO" },
      {
        name: "description",
        content: "Affordable SEO services for websites: RankBoost SEO setup, guest posting and link building, and high DA PA white hat backlinks. From $10 / 3,000 PKR.",
      },
      { name: "keywords", content: SEO_KEYWORDS.join(", ") },
      { property: "og:title", content: "SEO Setup Services & Guest Posting — RankBoost SEO" },
      { property: "og:description", content: "Affordable SEO setup, guest posting and link building with white hat backlinks. From $10 / 3,000 PKR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE.name,
          description: "SEO setup services, guest posting and link building, and white hat SEO backlinks for small business websites.",
          email: SITE.email,
          telephone: `+${SITE.whatsappIntl}`,
          areaServed: "Worldwide",
          knowsAbout: [...SEO_KEYWORDS],
          makesOffer: PACKAGES.map((p) => ({
            "@type": "Offer",
            name: `${p.name} SEO Package`,
            price: p.usd,
            priceCurrency: "USD",
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const ICONS = { "guest-posting": Link2, seo: Search, content: FileText } as const;

const WHY = [
  {
    icon: ShieldCheck,
    title: "White hat SEO backlinks provider",
    body: "No spam, no link farms. Every backlink is placed manually on a real site, so your rankings grow safely.",
  },
  {
    icon: Gauge,
    title: "High DA PA guest post backlinks",
    body: "We pick high DA PA sites that also have real organic traffic and match your niche.",
  },
  {
    icon: Users,
    title: "Professional blogger outreach services",
    body: "We reach out to trusted bloggers for you and get your article published with a natural link.",
  },
  {
    icon: TrendingUp,
    title: "Increase organic traffic to your website fast",
    body: "Keyword-focused content plus strong links — the fastest safe way to grow Google traffic.",
  },
];

const STEPS = [
  { n: "01", title: "Choose a package", body: "Pick Basic, Standard or Premium — or tell us what you need." },
  { n: "02", title: "Share your website", body: "Send your link and target keyword on WhatsApp or email." },
  { n: "03", title: "We write & publish", body: "Our team writes the article and places it on a relevant site." },
  { n: "04", title: "Get your report", body: "You receive the live link so you can see exactly what you paid for." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" />
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="container-site relative grid items-center gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="animate-rise min-w-0">
            <p className="eyebrow text-gold">SEO setup services · Guest posting · Link building</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              RankBoost SEO
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-muted">
              {SITE.tagline}
            </p>
            <div className="mt-8"><FreelanceActions /></div>
          </div>
          <div className="animate-rise mx-auto w-full min-w-0 max-w-md [animation-delay:150ms] md:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-gold/40 shadow-lift gold-glow">
              <img
                src={heroImage}
                alt="Premium guest posting service — published article linked by golden do-follow backlinks to high-authority websites"
                width={1024}
                height={1024}
                fetchPriority="high"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="relative z-10 mx-4 -mt-8 flex items-center gap-3 rounded-2xl border border-gold/30 bg-card/95 p-3 shadow-card backdrop-blur">
              <img
                src={profilePhoto.url}
                alt={FIVERR_GIG.ownerName}
                width={250}
                height={250}
                className="size-12 shrink-0 rounded-full border-2 border-gold object-cover"
              />
              <div className="min-w-0">
                <p className="font-bold text-heading">{FIVERR_GIG.ownerName}</p>
                <p className="truncate text-xs text-muted-foreground">Founder, RankBoost SEO · Trusted SEO seller on Fiverr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">What we do</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            SEO setup, guest posting & link building — everything your site needs to <span className="gold-underline">rank</span>.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.id];
            return (
              <article key={s.id} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <img
                  src={SERVICE_IMAGES[s.id].src}
                  alt={SERVICE_IMAGES[s.id].alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/2] w-full border-b border-gold/20 object-cover"
                />
                <div className="p-7">
                <span className="-mt-14 relative grid size-12 place-items-center rounded-2xl border border-gold/30 bg-panel text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <MeetTheExpert showGigImage={false} />

      <LiveProjects />

      {/* Why RankBoost */}
      <section className="border-y border-border">
        <div className="container-site grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-muted-foreground">Why RankBoost SEO</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              The best SEO strategy for small business websites.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Small businesses don't need expensive agencies. You need a proper SEO setup, a few powerful backlinks
              and content that answers what your customers search for. That is exactly what we deliver.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link to="/blog/$slug" params={{ slug: "best-seo-strategy-for-small-business-websites" }}>
                Read the full strategy <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY.map((w) => (
              <article key={w.title} className="rounded-3xl border border-border bg-card p-6">
                <w.icon className="size-6 text-gold" />
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink">
        <div className="container-site py-20">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple, from order to live link.</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="rounded-3xl border border-border bg-card p-6">
                <span className="font-display text-3xl font-extrabold text-gold/45">{step.n}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-site py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-muted-foreground">Packages</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clear prices. No surprises.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold underline-offset-4 hover:underline">
            Full service details →
          </Link>
        </div>
        <div className="mt-12">
          <PricingCards />
        </div>
      </section>

      {/* Blog */}
      <section className="border-t border-border">
        <div className="container-site py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-muted-foreground">From the blog</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Learn SEO the simple way.</h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold underline-offset-4 hover:underline">
              All articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-20">
        <div className="gold-surface relative overflow-hidden rounded-[2rem] p-10 md:p-14">
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-5xl">Ready to increase your organic traffic?</h2>
          <p className="mt-4 max-w-xl text-base opacity-80">Message us today — we reply fast on WhatsApp and email.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="dark" size="xl">
              <Link to="/contact">Send a message</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink("Hi RankBoost SEO!")} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
