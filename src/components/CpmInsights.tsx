"use client";

import { useState } from "react";

interface Rating {
  label: string;
  color: "success" | "warning" | "error";
  advice: string;
}

function getRating(cpm: number): Rating {
  if (cpm < 3) {
    return {
      label: "Low",
      color: "success",
      advice:
        "Your CPM is well below most platform averages. This is typical for Google Display Network or broad programmatic campaigns. Make sure impressions are reaching quality placements \u2014 low CPM can sometimes mean low-value inventory. Consider scaling budget while this rate holds.",
    };
  }
  if (cpm <= 10) {
    return {
      label: "Average",
      color: "warning",
      advice:
        "Your CPM falls within the typical range for most social media platforms like TikTok ($4\u2013$9) and YouTube ($6\u2013$12). To push it lower, test Reels or Stories placements which tend to run 10\u201330% cheaper than feed ads, and experiment with automated bidding strategies.",
    };
  }
  if (cpm <= 25) {
    return {
      label: "Above Average",
      color: "warning",
      advice:
        "Your CPM is in line with premium social placements \u2014 Meta ads in Tier 1 markets average $10\u2013$20, and Instagram premium placements can reach $23. Focus on creative quality to improve relevance scores, A/B test ad formats, and consider shifting top-of-funnel spend to lower-CPM channels like TikTok or Google Display.",
    };
  }
  if (cpm <= 50) {
    return {
      label: "High",
      color: "error",
      advice:
        "Your CPM is at the level of LinkedIn B2B campaigns ($31\u2013$65) or Connected TV ($25\u2013$35). If you are not running B2B or CTV, review your targeting \u2014 overly narrow audiences and premium placements inflate costs. Broaden targeting slightly and let platform algorithms optimize delivery.",
    };
  }
  return {
    label: "Very High",
    color: "error",
    advice:
      "Your CPM exceeds most industry benchmarks. Only LinkedIn in competitive sectors (SaaS/Tech) and premium CTV regularly hit this range. Diversify to lower-CPM platforms for awareness, reserve high-CPM channels for bottom-of-funnel conversion only, and leverage Q1 seasonality when CPMs drop 20\u201330% from Q4 peaks.",
  };
}

const colorClasses = {
  success: {
    badge: "bg-success/15 text-success",
  },
  warning: {
    badge: "bg-warning/15 text-warning",
  },
  error: {
    badge: "bg-error/15 text-error",
  },
};

const benchmarks = [
  { platform: "Google Display Network", cpm: "$2.50\u2013$3.12", notes: "Cheapest major platform" },
  { platform: "TikTok", cpm: "$4.00\u2013$9.16", notes: "~30% cheaper than Meta, gap closing" },
  { platform: "YouTube", cpm: "$6.00\u2013$12.00", notes: "Varies by niche and format" },
  { platform: "Facebook / Meta", cpm: "$7.47\u2013$19.81", notes: "Wide range; Q4 peaks +25\u201366%" },
  { platform: "Instagram", cpm: "$6.25\u2013$10.81", notes: "Stories cheaper than Feed" },
  { platform: "LinkedIn", cpm: "$31.00\u2013$65.00", notes: "B2B premium; 6.1% conversion rate" },
  { platform: "Programmatic (open exchange)", cpm: "$1.00\u2013$5.00", notes: "Standard display only" },
  { platform: "Connected TV", cpm: "$25.00\u2013$60.00", notes: "Premium video format" },
];

export default function CpmInsights({ cpm }: { cpm: number }) {
  const [benchmarkOpen, setBenchmarkOpen] = useState(false);
  const rating = getRating(cpm);
  const classes = colorClasses[rating.color];

  return (
    <div className="mx-auto mt-4 max-w-[560px] space-y-4">
      {/* Rating Card */}
      <div className="rounded-xl bg-surface p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${classes.badge}`}
          >
            {rating.label}
          </span>
          <span className="text-sm font-medium text-text-2">
            ${cpm.toFixed(2)} CPM
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text-1">{rating.advice}</p>
      </div>

      {/* Benchmarks Table (collapsible) */}
      <div className="rounded-xl bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={() => setBenchmarkOpen(!benchmarkOpen)}
          aria-expanded={benchmarkOpen}
          className="flex w-full cursor-pointer items-center justify-between rounded-xl p-6 text-left transition-colors duration-200 hover:bg-primary/5"
        >
          <span className="text-sm font-semibold text-text-1">
            CPM Benchmarks by Platform (2025–2026)
          </span>
          <svg
            className={`h-4 w-4 shrink-0 text-text-2 transition-transform duration-200 ${
              benchmarkOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {benchmarkOpen && (
          <div className="px-6 pb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-text-1">Platform</th>
                    <th className="pb-2 pr-4 font-semibold text-text-1">Typical CPM</th>
                    <th className="pb-2 font-semibold text-text-1">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((b) => (
                    <tr key={b.platform} className="border-b border-border/50 last:border-0">
                      <td className="py-2.5 pr-4 text-text-1">{b.platform}</td>
                      <td className="py-2.5 pr-4 font-medium text-text-1">{b.cpm}</td>
                      <td className="py-2.5 text-text-2">{b.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
