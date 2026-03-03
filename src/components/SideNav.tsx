"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "calculator", label: "Calculator" },
  { id: "what-is-cpm", label: "What Is CPM?" },
  { id: "how-to-calculate", label: "How to Calculate" },
  { id: "formula", label: "Formula Explained" },
  { id: "why-use", label: "Why Use It?" },
  { id: "cpm-vs-cpc-cpa", label: "CPM vs CPC vs CPA" },
  { id: "tips", label: "Tips to Lower CPM" },
  { id: "faq", label: "FAQ" },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-8 self-start">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-lg px-2 py-1.5 text-xs md:text-[13px] md:px-3 transition-colors duration-200 ${
                activeId === item.id
                  ? "text-primary font-medium bg-primary-bg"
                  : "text-text-2 hover:text-text-1"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
