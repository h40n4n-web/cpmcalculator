import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CPM Calculator",
  description: "Terms of service for cpmcalculator.com.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[720px] px-5 py-12">
      <h1 className="mb-6 text-3xl font-bold text-text-1">Terms of Service</h1>
      <div className="space-y-4 text-base leading-relaxed text-text-2">
        <p>
          Last updated: January 2025
        </p>
        <p>
          By accessing and using cpmcalculator.com, you agree to the following terms and
          conditions.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Use of Service</h2>
        <p>
          This calculator is provided free of charge for informational and educational
          purposes. The calculations are performed entirely in your browser. We make no
          guarantees about the accuracy of results — please verify important figures
          independently.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Limitation of Liability</h2>
        <p>
          cpmcalculator.com shall not be liable for any decisions made based on the
          calculator output. Use at your own risk.
        </p>
        <h2 className="text-xl font-semibold text-text-1 pt-4">Changes</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of the
          website constitutes acceptance of the updated terms.
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
