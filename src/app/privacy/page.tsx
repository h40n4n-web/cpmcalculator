import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CPM Calculator",
  description: "Privacy policy for cpmcalculator.one.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[720px] px-5 py-12">
      <h1 className="mb-6 text-3xl font-bold text-text-1">Privacy Policy</h1>
      <div className="space-y-4 text-base leading-relaxed text-text-2">
        <p>
          Last updated: January 2025
        </p>
        <p>
          cpmcalculator.one (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
          operates this website. This page informs you of our policies regarding the
          collection, use, and disclosure of personal information.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Information We Collect</h2>
        <p>
          This tool runs entirely in your browser. We do not collect, store, or transmit any
          of the values you enter into the calculator. No personal data is sent to our
          servers.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Cookies</h2>
        <p>
          We may use essential cookies to ensure the website functions correctly. We do not
          use tracking or advertising cookies.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our
          website.
        </p>
      </div>
      <div className="mt-8">
        <a href="/" className="text-primary transition-colors duration-200 hover:text-primary-hover">
          &larr; Back to CPM Calculator
        </a>
      </div>
    </main>
  );
}
