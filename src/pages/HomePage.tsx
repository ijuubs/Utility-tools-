import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import { BLOG_POSTS } from '../data/blogData';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.aliases?.some(alias => alias.replace(/-/g, ' ').includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-12 md:space-y-20">
        <Helmet>
          <title>Free Online Utility Tools & Calculators | ToolKitPro</title>
          <meta name="description" content="Access a massive collection of free online utility tools, developer utilities, calculators, and productivity apps. Process everything instantly and securely in your browser." />
          
          <link rel="canonical" href="https://toolkitpro.app/" />
          <meta property="og:title" content="Free Online Utility Tools & Calculators | ToolKitPro" />
          <meta property="og:description" content="Access a massive collection of free online utility tools, developer utilities, calculators, and productivity apps. Process everything instantly and securely in your browser." />
          <meta property="og:url" content="https://toolkitpro.app/" />
          <meta property="og:type" content="website" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Online Utility Tools & Calculators | ToolKitPro" />
          <meta name="twitter:description" content="Access a massive collection of free online utility tools, developer utilities, calculators, and productivity apps. Process everything instantly and securely in your browser." />

          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "ToolKitPro",
                "url": "https://toolkitpro.app/",
                "description": "Free online utility tools, developer utilities, calculators, and productivity apps."
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ToolKitPro",
                "url": "https://toolkitpro.app/",
                "logo": "https://toolkitpro.app/toolkitpro-logo.jpg"
              }
            ])}
          </script>
        </Helmet>
        
        {/* HERO SECTION */}
        <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Free Online Utility Tools & Calculators
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black bg-yellow-200 inline-block px-3 py-1.5 md:px-4 md:py-2 border-2 border-black font-bold max-w-full break-words">
              Fast, secure, and ready-to-use tools. 100% Client-Side. No Sign-up Required.
            </p>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-white border-4 border-black p-4 flex gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a tool... (e.g. JSON Formatter, Unit Converter)" 
              className="w-full text-lg md:text-xl font-bold px-4 py-2 border-2 border-transparent focus:border-black focus:outline-none placeholder-gray-600"
            />
            {/* Keeping button for visual consistency, search works automatically onChange */}
            <button className="bg-black text-white px-6 py-2 font-black uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors">
              Search
            </button>
        </div>

        {/* ALL TOOLS SECTION */}
        <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-black pb-2">All Tools Directory</h2>
            {filteredTools.length === 0 ? (
                <div className="text-center py-12 border-4 border-black border-dashed">
                    <p className="text-2xl font-black uppercase text-gray-600">No tools found matching "{searchQuery}"</p>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {filteredTools.map((tool, index) => (
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
            )}
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

        <section className="space-y-8 md:space-y-12 bg-white p-6 sm:p-8 md:p-12 border-4 border-black border-dashed" itemScope itemType="https://schema.org/Article">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter border-b-4 md:border-b-8 border-black pb-3 md:pb-4 leading-tight">Your Ultimate Hub for Utility Tools</h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-black leading-relaxed space-y-4 md:space-y-6">
                  <p className="font-bold text-lg md:text-xl">
                    Welcome to ToolKitPro, your comprehensive destination for high-quality, professional-grade online utility tools. Whether you are a developer formatting JSON payloads, a student counting words for an essay, or a business owner calculating profit margins, our suite of tools is designed to accelerate your workflow.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">What Are Free Online Utility Tools?</h3>
                  <p className="text-sm md:text-base">
                    Online utility tools are specialized, single-purpose web applications designed to solve specific problems quickly. Instead of downloading heavy software suites or dealing with complex configurations, you simply open your browser and get the job done. From developers who need quick <strong>URL Encoding</strong> or <strong>JSON Formatting</strong>, to writers who need instantaneous <strong>Word Counters</strong>, online tools provide immediate value with zero friction.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">Developer & Programmer Tools</h3>
                  <p className="text-sm md:text-base">
                    Software engineering requires precision. Our developer tools are built to help programmers debug, format, and convert data structures without relying on questionable third-party cloud processors. All our developer tools like the JSON Formatter and URL Encoder operate 100% locally in your browser to maintain the highest standard of data privacy. No data is sent to our servers.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">Business & Financial Calculators</h3>
                  <p className="text-sm md:text-base">
                    Time is money in the business world. ToolKitPro offers a growing suite of financial calculators designed to help entrepreneurs and professionals make data-driven decisions. Whether you are forecasting with a <strong>Compound Interest Calculator</strong>, analyzing a new venture with an <strong>ROI Calculator</strong>, or determining your retail pricing with our upcoming <strong>Profit Margin Calculator</strong>, we provide accurate, instant calculations.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">Everyday Productivity Tools</h3>
                  <p className="text-sm md:text-base">
                    You don't need to be a software engineer to benefit from utility tools. Our platform includes essential productivity instruments for daily tasks. Generate robust security credentials with our <strong>Password Generator</strong>, compress heavy documents with our <strong>PDF Compressor</strong>, or effortlessly convert metrics with our <strong>Unit Converter</strong>. Every tool is optimized for mobile and desktop, ensuring you can work efficiently from anywhere.
                  </p>

                  <h3 className="text-xl md:text-2xl font-black uppercase mt-6 md:mt-8 mb-2 md:mb-4">The Benefits of Using ToolKitPro</h3>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 font-medium text-sm md:text-base">
                      <li><strong>100% Free to Use:</strong> No subscriptions, no hidden fees, and absolutely no paywalls.</li>
                      <li><strong>Client-Side Processing:</strong> Your data security is our priority. Tools run directly in your browser's memory, guaranteeing zero server retention.</li>
                      <li><strong>Instant Results:</strong> Because processing happens locally, you circumvent upload times and server latency. Get your results in milliseconds.</li>
                      <li><strong>No Sign-Up Required:</strong> Skip the annoying registration flows. Open the tool, input your data, and get instant results.</li>
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
                <p className="font-medium text-black text-sm md:text-base">No accounts. No sign-ups. We provide a clean, Neu-Brutalist utility experience supported by unobtrusive ads, keeping the tools free for high-performance users.</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-1 md:pb-2">Expert Insights</h3>
                <p className="font-medium text-black text-sm md:text-base">Every tool is accompanied by deep technical guides and FAQs, ensuring you not only get the result you need but also understand the math and logic behind it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8 md:space-y-12 bg-white p-6 sm:p-8 md:p-12 border-4 border-black border-dashed">
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <div className="flex justify-between items-end border-b-8 border-black pb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Latest Articles</h2>
              <Link to="/blog" className="hidden sm:block text-lg font-black uppercase hover:text-yellow-600 transition-colors">View All &rarr;</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {BLOG_POSTS.slice(0, 3).map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="block border-4 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] transition-all flex flex-col h-full">
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="text-xs font-black uppercase text-gray-600 mb-2">{post.category}</div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 leading-tight">{post.title}</h3>
                    <p className="font-medium text-sm sm:text-base text-gray-700 flex-grow">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t-2 border-black flex justify-between items-center text-xs font-bold uppercase">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="sm:hidden mt-6 text-center">
              <Link to="/blog" className="inline-block px-8 py-3 bg-black text-white text-lg font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all">View All Articles</Link>
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
