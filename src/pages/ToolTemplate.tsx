import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import { Suspense, lazy } from 'react';
import AdSlot from '../components/AdSlot';
import ErrorBoundary from '../components/ErrorBoundary';
import Breadcrumbs from '../components/Breadcrumbs';

// Lazy load tools
const WordCounter = lazy(() => import('../components/tools/WordCounter'));
const JsonFormatter = lazy(() => import('../components/tools/JsonFormatter'));
const PdfCompressor = lazy(() => import('../components/tools/PdfCompressor'));
const ImageResizer = lazy(() => import('../components/tools/ImageResizer'));
const QrCodeGenerator = lazy(() => import('../components/tools/QrCodeGenerator'));
const PasswordGenerator = lazy(() => import('../components/tools/PasswordGenerator'));
const BmiCalculator = lazy(() => import('../components/tools/BmiCalculator'));
const UrlEncoder = lazy(() => import('../components/tools/UrlEncoder'));
const LoremIpsum = lazy(() => import('../components/tools/LoremIpsum'));
const ColorPicker = lazy(() => import('../components/tools/ColorPicker'));
const UnitConverter = lazy(() => import('../components/tools/UnitConverter'));

export default function ToolTemplate() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find tool by slug or alias
  const tool = TOOLS.find((t) => t.slug === slug || (t.aliases && t.aliases.includes(slug || '')));

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center space-y-6">
        <h1 className="text-6xl font-black uppercase">404</h1>
        <p className="text-2xl font-bold">Tool Not Found</p>
        <Link to="/" className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  // Determine if we are on an alias and set dynamic title
  const isAlias = tool.aliases?.includes(slug || '');
  const displayTitle = isAlias && slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
    : tool.name;

  const renderTool = () => {
    switch(tool.id) {
        case 'word-counter': return <WordCounter />;
        case 'json-formatter': return <JsonFormatter />;
        case 'pdf-compressor': return <PdfCompressor />;
        case 'image-resizer': return <ImageResizer />;
        case 'qr-code-generator': return <QrCodeGenerator />;
        case 'password-generator': return <PasswordGenerator />;
        case 'bmi-calculator': return <BmiCalculator />;
        case 'url-encoder': return <UrlEncoder />;
        case 'lorem-ipsum': return <LoremIpsum />;
        case 'color-picker': return <ColorPicker />;
        case 'unit-converter': return <UnitConverter />;
        default: return <p className="text-center text-[var(--muted)]">Tool interface for {tool.name} coming soon.</p>;
    }
  };

  const relatedTools = TOOLS
    .filter(t => t.id !== tool.id && (t.category === tool.category))
    .slice(0, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": displayTitle,
    "description": tool.metaDescription || tool.description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": tool.description
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sticky Sidebar */}
      <aside className="w-full lg:w-64 shrink-0">
        <div className="sticky top-8 space-y-6">
          <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black uppercase text-lg mb-4 border-b-2 border-black pb-2">Tools</h3>
            <ul className="space-y-2">
              {TOOLS.map((t) => (
                <li key={t.id}>
                  <Link 
                    to={`/tools/${t.slug}`} 
                    className={`block p-2 text-sm font-bold border-2 border-transparent hover:border-black transition-all ${t.id === tool.id ? 'bg-yellow-200 border-black' : ''}`}
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {relatedTools.length > 0 && (
            <div className="bg-black text-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(251,191,36,1)]">
              <h3 className="font-black uppercase text-lg mb-4 text-yellow-400">Related</h3>
              <ul className="space-y-3">
                {relatedTools.map((t) => (
                  <li key={t.id}>
                    <Link to={`/tools/${t.slug}`} className="block text-sm font-bold hover:text-yellow-400 transition-colors">
                      → {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="hidden lg:block border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <AdSlot adSlot="9791142997" adFormat="vertical" minHeight="600px" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8 min-w-0">
        <Helmet>
          <title>{displayTitle} | ToolKitPro</title>
          <meta name="description" content={tool.metaDescription || tool.description} />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4 text-[var(--g6)]">
          {displayTitle}
        </h1>

        <AdSlot adSlot="9791142997" adFormat="horizontal" minHeight="90px" className="my-0" />
        
        <Breadcrumbs items={[{ label: 'Tools', path: '/' }, { label: tool.name }]} />

        <div className="bg-[var(--surface)] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px]">
          <ErrorBoundary>
            <Suspense fallback={<div className="text-center font-bold uppercase animate-pulse">Loading tool interface...</div>}>
                {renderTool()}
            </Suspense>
          </ErrorBoundary>
        </div>

        <AdSlot adSlot="9791142997" adFormat="rectangle" minHeight="280px" className="my-8" />

        <section className="prose max-w-none">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--g6)] border-b-4 border-black pb-2">How to use {displayTitle}</h2>
          <div className="text-[var(--muted)] whitespace-pre-line leading-relaxed mt-6">{tool.howTo}</div>
          
          <div className="my-12 p-10 bg-yellow-400 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black uppercase mb-4">Pro Tip</h3>
            <p className="font-bold text-lg">Use keyboard shortcuts (Cmd/Ctrl + V) to instantly paste data into our tools for faster workflow.</p>
          </div>

          <AdSlot adSlot="9791142997" adFormat="auto" minHeight="250px" className="my-12" />

          <h3 className="text-3xl font-black uppercase tracking-tight text-[var(--g6)] mt-16 border-b-4 border-black pb-2">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {tool.faqs.map((faq, i) => (
                <div key={i} className="p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <h4 className="font-black uppercase mb-2">{faq.question}</h4>
                    <p className="text-[var(--muted)] font-medium">{faq.answer}</p>
                </div>
            ))}
          </div>
        </section>

        {/* Footer Ad Placement */}
        <div className="pt-20">
             <AdSlot adSlot="9791142997" adFormat="auto" minHeight="250px" />
        </div>
      </div>
    </div>
  );
}
