import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOOLS } from '../data/toolsData';
import { Suspense, lazy } from 'react';
import AdSlot from '../components/AdSlot';

// Lazy load tools
const WordCounter = lazy(() => import('../components/tools/WordCounter'));
const JsonFormatter = lazy(() => import('../components/tools/JsonFormatter'));
const PdfCompressor = lazy(() => import('../components/tools/PdfCompressor'));
const ImageResizer = lazy(() => import('../components/tools/ImageResizer'));
const QrCodeGenerator = lazy(() => import('../components/tools/QrCodeGenerator'));
const PasswordGenerator = lazy(() => import('../components/tools/PasswordGenerator'));
const BmiCalculator = lazy(() => import('../components/tools/BmiCalculator'));
const UrlEncoder = lazy(() => import('../components/tools/UrlEncoder'));

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
        <div className="sticky top-8 bg-white border-4 border-black p-4 space-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8 min-w-0">
        <Helmet>
          <title>{tool.name} | ToolVerde</title>
          <meta name="description" content={tool.description} />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4 text-[var(--g6)]">
          {tool.name}
        </h1>
        
        <div className="bg-[var(--surface)] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Suspense fallback={<div className="text-center">Loading tool...</div>}>
              {renderTool()}
          </Suspense>
        </div>

        <AdSlot minHeight="250px" />

        <section className="prose max-w-none">
          <h2 className="text-3xl font-display text-[var(--g6)]">How to use {tool.name}</h2>
          <div className="text-[var(--muted)] whitespace-pre-line">{tool.howTo}</div>
          
          <AdSlot minHeight="300px" className="my-12" />

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
