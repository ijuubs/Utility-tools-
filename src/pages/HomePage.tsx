import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  return (
    <div className="space-y-20">
        <Helmet>
          <title>ToolKitPro | High-Performance Utility Ecosystem</title>
          <meta name="description" content="Access a collection of fast, secure, and ready-to-use utility tools for designers and developers." />
        </Helmet>
        <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">
              Utility Tools
            </h2>
            <p className="text-xl text-black bg-yellow-200 inline-block px-4 py-2 border-2 border-black mb-12 font-bold">
              Fast, secure, and ready-to-use tools.
            </p>

            <AdSlot adSlot="9791142997" adFormat="horizontal" minHeight="90px" className="mb-12" />
            
            <div className="grid md:grid-cols-3 gap-8">
                {TOOLS.map((tool, index) => (
                  <Fragment key={tool.id}>
                    <Link 
                      to={`/tools/${tool.slug}`} 
                      className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                        <h3 className="text-2xl font-black mb-4 uppercase">{tool.name}</h3>
                        <p className="text-black font-medium">{tool.description}</p>
                    </Link>
                    {/* Insert an ad after every 6 tools for in-feed monetization */}
                    {(index + 1) % 6 === 0 && (
                      <div key={`ad-${index}`} className="md:col-span-1 min-h-[300px]">
                        <AdSlot adSlot="9791142997" adFormat="rectangle" minHeight="300px" className="my-0 h-full" />
                      </div>
                    )}
                  </Fragment>
                ))}
            </div>
        </div>

        <AdSlot adSlot="9791142997" minHeight="250px" />

        <section className="bg-black text-white p-10 border-4 border-black">
            <h2 className="text-4xl font-black mb-8 uppercase text-yellow-300">Popular Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {TOOLS.slice(0, 4).map(tool => (
                    <Link 
                        key={tool.id} 
                        to={`/tools/${tool.slug}`} 
                        className="p-6 bg-white text-black border-4 border-black hover:bg-yellow-100 transition-colors"
                    >
                        <h3 className="text-2xl font-black mb-2 uppercase">{tool.name}</h3>
                        <p className="font-medium">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </section>

        <section className="space-y-12 bg-yellow-50 p-12 border-4 border-black">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Why Professionals Choose ToolKitPro</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2">100% Privacy</h3>
                <p className="font-bold text-[var(--muted)]">Unlike competing sites, we don't store your data. PDF compression, Image resizing, and JSON formatting all happen directly in your browser. Your sensitive information never leaves your machine.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2">Technical Rigor</h3>
                <p className="font-bold text-[var(--muted)]">Our calculators are built on verified scientific formulas (like WHO-standard BMI) and industrial-grade algorithms (like Lanczos resampling for image scaling).</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2">Zero Friction</h3>
                <p className="font-bold text-[var(--muted)]">No accounts. No sign-ups. No pop-up advertisements that block your workflow. We provide a clean, Neu-Brutalist utility experience for high-performance users.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2">Expert Insights</h3>
                <p className="font-bold text-[var(--muted)]">Every tool is accompanied by deep technical guides and FAQs, ensuring you not only get the result you need but also understand the math and logic behind it.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-black pt-12 flex flex-col items-center text-center space-y-6">
            <h3 className="text-3xl font-black uppercase italic">Ready to optimize your workflow?</h3>
            <Link to="/about" className="px-12 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">Learn More About Us</Link>
          </div>
        </section>
    </div>
  );
}
