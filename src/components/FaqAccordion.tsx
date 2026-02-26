"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-primary/5 rounded-xl min-h-[44px]"
          >
            <span className="pr-4 text-base font-medium text-text-1">
              {faq.question}
            </span>
            <svg
              className={`h-4 w-4 shrink-0 text-text-2 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5">
              <p className="text-sm leading-relaxed text-text-2">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
