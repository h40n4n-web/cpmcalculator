import CpmCalculator from "@/components/CpmCalculator";
import FaqAccordion from "@/components/FaqAccordion";
import SideNav from "@/components/SideNav";
import ThemeToggle from "@/components/ThemeToggle";
import { faqs } from "@/data/faqs";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CPM Calculator",
    url: "https://cpmcalculator.one",
    description:
      "Calculate your CPM, total ad spend, or impressions instantly with this free CPM calculator.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-[1100px] px-3 pt-4 flex justify-end md:px-5">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-[1100px] px-3 flex gap-4 md:px-5 md:gap-8">
        <aside className="w-[120px] shrink-0 pt-8 md:w-[160px] lg:w-[180px] md:pt-12">
          <SideNav />
        </aside>

        <main className="min-w-0 flex-1 py-8 md:py-12 lg:py-16">
        {/* Hero */}
        <section className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-text-1 md:text-4xl lg:text-[42px]">
            CPM Calculator — Calculate Your Cost Per Mille Instantly
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-text-2 md:text-lg">
            Quickly compute your CPM, total ad spend, or impressions with this free online
            CPM calculator. Enter any two values and get the third instantly — no sign-up
            required.
          </p>
        </section>

        {/* CPM Calculator */}
        <section id="calculator" className="mb-12 md:mb-16 scroll-mt-8">
          <CpmCalculator />
        </section>

        {/* What Is CPM? */}
        <section id="what-is-cpm" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            What Is CPM?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-2">
            <p>
              CPM stands for Cost Per Mille — &ldquo;mille&rdquo; is Latin for one
              thousand. It tells you how much an advertiser pays for every 1,000 ad
              impressions.
            </p>
            <p>
              CPM is the standard pricing model for display advertising, programmatic media
              buying, and social media campaigns. Whether you run ads on Google Display
              Network, Meta, TikTok, or any programmatic DSP, CPM is the metric you will
              use to measure and compare costs.
            </p>
            <p>
              Average display CPMs typically range from $1 to $10, though premium placements
              and highly targeted audiences can push that number well above $20.
            </p>
          </div>
        </section>

        {/* How to Calculate CPM */}
        <section id="how-to-calculate" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            How to Calculate CPM
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-2">
            <p>Calculating CPM is straightforward:</p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                Take your <strong className="text-text-1">total ad spend</strong> — for
                example, $500.
              </li>
              <li>
                Take the{" "}
                <strong className="text-text-1">total number of impressions</strong> your
                campaign delivered — for example, 200,000.
              </li>
              <li>
                Divide ad spend by impressions, then multiply by 1,000.
              </li>
            </ol>
            <p>
              <strong className="text-text-1">Example:</strong> You spent $500 and received
              200,000 impressions.
              <br />
              CPM = ($500 &divide; 200,000) &times; 1,000 ={" "}
              <strong className="text-text-1">$2.50</strong>
            </p>
            <p>
              That means you paid $2.50 for every 1,000 times your ad was shown.
            </p>
          </div>
        </section>

        {/* CPM Formula Explained */}
        <section id="formula" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            CPM Formula Explained
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-2">
            <p>
              There are three ways to use the CPM formula, depending on which value you need
              to find:
            </p>
            <ul className="space-y-4">
              <li>
                <strong className="text-text-1">Find CPM:</strong> CPM = (Total Ad Spend
                &divide; Impressions) &times; 1,000
                <br />
                Use this when you have your spend and impression data and want to know your
                effective CPM.
              </li>
              <li>
                <strong className="text-text-1">Find Total Ad Spend:</strong> Total Ad Spend
                = CPM &times; (Impressions &divide; 1,000)
                <br />
                Use this when planning a budget — you know the CPM rate and want to estimate
                how much a campaign will cost.
              </li>
              <li>
                <strong className="text-text-1">Find Impressions:</strong> Impressions =
                (Total Ad Spend &divide; CPM) &times; 1,000
                <br />
                Use this to forecast reach — you have a fixed budget and want to know how
                many impressions you can expect.
              </li>
            </ul>
          </div>
        </section>

        {/* Why Use a CPM Calculator? */}
        <section id="why-use" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            Why Use a CPM Calculator?
          </h2>
          <ul className="ml-5 list-disc space-y-3 text-base leading-relaxed text-text-2">
            <li>
              <strong className="text-text-1">Budget planning</strong> — Estimate how many
              impressions your budget can buy before you launch a campaign.
            </li>
            <li>
              <strong className="text-text-1">Performance benchmarking</strong> — Compare
              CPMs across platforms like Google, Meta, and TikTok to see where your money
              goes furthest.
            </li>
            <li>
              <strong className="text-text-1">Rate negotiation</strong> — Walk into
              publisher meetings with hard numbers so you can negotiate better deals.
            </li>
            <li>
              <strong className="text-text-1">Cross-channel comparison</strong> — Normalize
              costs from campaigns that use different pricing models (CPC, CPA) into a
              single CPM metric.
            </li>
          </ul>
        </section>

        {/* CPM vs CPC vs CPA */}
        <section id="cpm-vs-cpc-cpa" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            CPM vs CPC vs CPA
          </h2>
          <div className="overflow-x-auto rounded-xl bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold text-text-1">Metric</th>
                  <th className="p-4 font-semibold text-text-1">Full Name</th>
                  <th className="p-4 font-semibold text-text-1">You Pay For</th>
                  <th className="p-4 font-semibold text-text-1">Best For</th>
                </tr>
              </thead>
              <tbody className="text-text-2">
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium text-text-1">CPM</td>
                  <td className="p-4">Cost Per Mille</td>
                  <td className="p-4">Every 1,000 impressions</td>
                  <td className="p-4">Brand awareness and reach</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium text-text-1">CPC</td>
                  <td className="p-4">Cost Per Click</td>
                  <td className="p-4">Each click on your ad</td>
                  <td className="p-4">Driving traffic and leads</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-text-1">CPA</td>
                  <td className="p-4">Cost Per Acquisition</td>
                  <td className="p-4">Each conversion or action</td>
                  <td className="p-4">Direct-response performance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-relaxed text-text-2">
            Choose CPM when your goal is maximum visibility. If you need clicks, lean toward
            CPC. If you are optimizing for sales or sign-ups, CPA gives you the tightest
            control over return on ad spend.
          </p>
        </section>

        {/* Tips to Lower Your CPM */}
        <section id="tips" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-4 text-[22px] font-semibold text-text-1 md:text-2xl">
            Tips to Lower Your CPM
          </h2>
          <ol className="ml-5 list-decimal space-y-3 text-base leading-relaxed text-text-2">
            <li>
              <strong className="text-text-1">Narrow your audience</strong> —
              Hyper-specific targeting often faces less competition, which drives costs down.
            </li>
            <li>
              <strong className="text-text-1">Improve your creatives</strong> — Platforms
              reward high-engagement ads with lower delivery costs.
            </li>
            <li>
              <strong className="text-text-1">Test multiple placements</strong> — Feed ads,
              Stories, and in-stream video can have vastly different CPMs.
            </li>
            <li>
              <strong className="text-text-1">Use automated bidding</strong> — Let the
              platform optimize delivery for impressions at the lowest cost.
            </li>
            <li>
              <strong className="text-text-1">Run during off-peak hours</strong> — Ad
              inventory prices fluctuate by time of day and season.
            </li>
            <li>
              <strong className="text-text-1">Set frequency caps</strong> — Stop paying to
              show the same user your ad dozens of times.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 md:mb-16 scroll-mt-8">
          <h2 className="mb-6 text-[22px] font-semibold text-text-1 md:text-2xl">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-[720px] px-5 flex flex-col items-center gap-3 text-sm text-text-2 sm:flex-row sm:justify-between">
          <p>&copy; 2025 cpmcalculator.com</p>
          <div className="flex gap-4">
            <a href="/privacy" className="transition-colors duration-200 hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors duration-200 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
