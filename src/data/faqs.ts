export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What does CPM stand for?",
    answer:
      'CPM stands for Cost Per Mille. "Mille" is Latin for one thousand, so CPM is the cost an advertiser pays for every 1,000 ad impressions.',
  },
  {
    question: "What is a good CPM?",
    answer:
      "It depends on your industry and platform. Display ads typically see $1\u2013$5. Social media CPMs run $5\u2013$15. Premium or niche audiences can push CPMs above $20.",
  },
  {
    question: "How is CPM different from eCPM?",
    answer:
      "CPM is the price the advertiser sets or pays. eCPM (effective CPM) is a publisher-side metric that converts revenue from any pricing model (CPC, CPA, etc.) into a per-1,000-impression figure for easier comparison.",
  },
  {
    question: "Can I use this calculator for video ads?",
    answer:
      "Yes. The CPM formula works the same way for display, video, native, and audio ads. Just enter your total spend and total impressions.",
  },
  {
    question: "Is CPM the same as CPT?",
    answer:
      "Yes. CPT stands for Cost Per Thousand \u2014 it is the English translation of CPM. They mean exactly the same thing.",
  },
];
