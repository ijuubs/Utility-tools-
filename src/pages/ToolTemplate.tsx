import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import { Suspense, lazy } from 'react';
import AdSlot from '../components/AdSlot';
import ErrorBoundary from '../components/ErrorBoundary';

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
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return <div>Tool not found</div>;
  }

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "DeveloperApplication",
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sticky Sidebar */}
      <aside className="w-full lg:w-64 shrink-0">
        <div className="sticky top-8 space-y-4">
          <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black uppercase text-lg">All Tools</h3>
            <ul className="space-y-2">
              {TOOLS.map((t) => (
                <li key={t.id}>
                  <Link 
                    to={`/tools/${t.slug}`} 
                    className={`block p-2 text-sm font-bold border-2 border-transparent hover:border-black transition-all ${t.slug === slug ? 'bg-yellow-200 border-black' : ''}`}
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <AdSlot adSlot="9791142997" adFormat="vertical" minHeight="600px" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8 min-w-0">
        <Helmet>
          <title>{tool.name} | ToolKitPro</title>
          <meta name="description" content={tool.description} />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4 text-[var(--g6)]">
          {tool.name}
        </h1>

        <AdSlot adSlot="9791142997" adFormat="horizontal" minHeight="90px" className="my-0" />
        
        <div className="bg-[var(--surface)] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px]">
          <ErrorBoundary>
            <Suspense fallback={<div className="text-center font-bold uppercase animate-pulse">Loading tool interface...</div>}>
                {renderTool()}
            </Suspense>
          </ErrorBoundary>
        </div>

        <AdSlot adSlot="9791142997" adFormat="rectangle" minHeight="280px" className="my-8" />

        <section className="prose max-w-none">
          <h2 className="text-3xl font-display text-[var(--g6)]">How to use {tool.name}</h2>
          <div className="text-[var(--muted)] whitespace-pre-line leading-relaxed">{tool.howTo}</div>
          
          <div className="my-12 p-6 bg-yellow-50 border-2 border-dashed border-black">
            <p className="text-xs uppercase font-bold text-center mb-2">Advertisement</p>
            <AdSlot adSlot="9791142997" adFormat="auto" minHeight="250px" className="my-0" />
          </div>

          <AdSlot adSlot="9791142997" adFormat="auto" minHeight="250px" className="my-0" />

          <h3 className="text-2xl font-display text-[var(--g6)] mt-8">Frequently Asked Questions</h3>
          {tool.faqs.map((faq, i) => (
              <div key={i} className="mb-4">
                  <h4 className="font-bold">{faq.question}</h4>
                  <p className="text-[var(--muted)]">{faq.answer}</p>
              </div>
          ))}
        </section>
      </div>
    </div>
  );
}
