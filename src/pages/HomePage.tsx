import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
        <Helmet>
          <title>ToolKitPro | High-Performance, Privacy-First Utility Ecosystem</title>
          <meta name="description" content="Access a collection of fast, secure, and ready-to-use utility tools for designers and developers. Process everything in your browser." />
        </Helmet>
        <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 uppercase leading-none">
              The Professional ToolKit
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black bg-yellow-200 inline-block px-3 py-1.5 md:px-4 md:py-2 border-2 border-black mb-8 md:mb-12 font-bold max-w-full break-words">
              Fast, secure, and ready-to-use tools. 100% Client-Side.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {TOOLS.map((tool, index) => (
                  <Fragment key={tool.id}>
                    <Link 
                      to={`/tools/${tool.slug}`} 
                      className="p-6 md:p-8 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                        <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase leading-tight">{tool.name}</h3>
                        <p className="text-black font-medium text-sm md:text-base">{tool.description}</p>
                    </Link>
                    {/* Insert an ad after every 6 tools for in-feed monetization */}
                    {(index + 1) % 6 === 0 && (
                      <div key={`ad-${index}`} className="sm:col-span-2 md:col-span-1 min-h-[300px]">
                        <AdSlot adSlot="9791142997" adFormat="rectangle" minHeight="300px" className="my-0 h-full" />
                      </div>
                    )}
                  </Fragment>
                ))}
            </div>
        </div>

        <section className="bg-black text-white p-6 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] md:shadow-[16px_16px_0px_0px_rgba(251,191,36,1)]">
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase text-yellow-300 tracking-tighter">Essential Workflows</h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {TOOLS.slice(0, 4).map(tool => (
                    <Link 
                        key={tool.id} 
                        to={`/tools/${tool.slug}`} 
                        className="p-5 md:p-6 bg-white text-black border-4 border-black hover:bg-yellow-100 transition-colors"
                    >
                        <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2 uppercase">{tool.name}</h3>
                        <p className="font-medium text-sm md:text-base">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </section>

        <section className="space-y-8 md:space-y-12 bg-white p-6 sm:p-8 md:p-12 border-4 border-black border-dashed">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter border-b-4 md:border-b-8 border-black pb-3 md:pb-4 leading-tight">The Privacy Architecture</h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-black leading-relaxed space-y-4 md:space-y-6">
                  <p className="font-bold text-lg md:text-xl">
                    In today's internet ecosystem, your data is treated as currency. Most utility sites offer "free" tools precisely because they are uploading your documents, scripts, and images to their servers to harvest metadata. ToolKitPro flips this model on its head entirely.
                  </p>
                  <p className="text-sm md:text-base">
                    Instead of relying on remote servers to process your files, we utilize **WebAssembly**, **Client-Side JavaScript**, and modern browser APIs to turn your browser into the server. When you drag and drop a PDF into our compressor, the bits are rearranged locally in your RAM. When you format JSON, the algorithm runs purely within your local CPU runtime.
                  </p>
                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">Why Client-Side is Superior</h3>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 font-medium text-sm md:text-base">
                      <li><strong>Military-Grade Privacy:</strong> Since files never cross the network, there is exactly zero risk of an interception, server leak, or third-party database breach.</li>
                      <li><strong>Instantaneous Speed:</strong> You are no longer gated by your upload speed. A 50MB PDF optimizes in seconds because it never has to travel to a cloud server.</li>
                      <li><strong>Zero Downtime:</strong> Because we don't rely on massive backend processing clusters, ToolKitPro is immune to server crashes. If you can load the JavaScript, the tool will work.</li>
                  </ul>
              </div>
            </div>
        </section>

        <section className="space-y-8 md:space-y-12 bg-yellow-50 p-6 sm:p-8 md:p-12 border-4 border-black">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-tight">Built For Professionals</h2>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-1 md:pb-2">100% Privacy</h3>
                <p className="font-medium text-black text-sm md:text-base">Unlike competing sites, we don't store your data. PDF compression, Image resizing, and JSON formatting all happen directly in your browser. Your sensitive information never leaves your machine.</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-1 md:pb-2">Technical Rigor</h3>
                <p className="font-medium text-black text-sm md:text-base">Our calculators are built on verified scientific formulas (like WHO-standard BMI) and industrial-grade algorithms (like Lanczos resampling for image scaling).</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-1 md:pb-2">Zero Friction</h3>
                <p className="font-medium text-black text-sm md:text-base">No accounts. No sign-ups. No pop-up advertisements that block your workflow. We provide a clean, Neu-Brutalist utility experience for high-performance users.</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-1 md:pb-2">Expert Insights</h3>
                <p className="font-medium text-black text-sm md:text-base">Every tool is accompanied by deep technical guides and FAQs, ensuring you not only get the result you need but also understand the math and logic behind it.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-black pt-8 md:pt-12 flex flex-col items-center text-center space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight">Ready to optimize your workflow?</h3>
            <Link to="/about" className="px-8 py-3 md:px-12 md:py-4 bg-black text-white text-lg md:text-xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">Learn More About Us</Link>
          </div>
        </section>
    </div>
  );
}
