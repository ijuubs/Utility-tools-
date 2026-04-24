import { Helmet } from 'react-helmet-async';

const FAQS = [
  {
    q: "Are the tools really free?",
    a: "Yes. All tools on ToolKitPro are 100% free for personal and commercial use. We monetize via unobtrusive advertisements and sponsorships."
  },
  {
    q: "Is my data safe with ToolKitPro?",
    a: "Absolutely. Most of our tools use client-side technology, meaning your files and data never leave your browser. For tools that require server-side computing, we use encrypted streams and delete all data immediately after processing."
  },
  {
    q: "Do I need to create an account?",
    a: "Never. We believe in high-performance access without friction. No sign-ups, no tracking accounts."
  },
  {
    q: "Can I request a new tool?",
    a: "We love feature requests! Please use our Contact page to send us your ideas. Our engineering team reviews all suggestions weekly."
  },
  {
    q: "Are the calculations accurate?",
    a: "Yes. We use industry-standard formulas, such as WHO guidelines for health metrics and IEEE standards for technical conversions. However, for critical medical or financial decisions, we always recommend consulting with a professional."
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <Helmet>
        <title>FAQ | ToolKitPro</title>
        <meta name="description" content="Frequently Asked Questions about ToolKitPro's privacy, tools, and mission." />
      </Helmet>
      
      <h1 className="text-5xl font-black uppercase tracking-tighter border-b-8 border-black pb-4">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <h3 className="text-2xl font-black uppercase italic border-b-2 border-yellow-400 pb-2">{faq.q}</h3>
            <p className="text-xl font-medium text-[var(--muted)] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
