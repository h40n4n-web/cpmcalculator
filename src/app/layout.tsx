import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPM Calculator — Free Online Cost Per Mille Calculator",
  description:
    "Calculate your CPM, total ad spend, or impressions instantly with this free CPM calculator. Enter any two values and get the third — no sign-up needed.",
  metadataBase: new URL("https://cpmcalculator.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CPM Calculator — Free Online Cost Per Mille Calculator",
    description:
      "Calculate your CPM, total ad spend, or impressions instantly with this free CPM calculator. Enter any two values and get the third — no sign-up needed.",
    url: "https://cpmcalculator.com",
    siteName: "CPM Calculator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPM Calculator — Free Online Cost Per Mille Calculator",
    description:
      "Calculate your CPM, total ad spend, or impressions instantly with this free CPM calculator. Enter any two values and get the third — no sign-up needed.",
  },
  robots: { index: true, follow: true },
};

// Inline script to apply theme before first paint — prevents flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
