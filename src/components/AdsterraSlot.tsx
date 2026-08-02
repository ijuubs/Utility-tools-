import { Link } from 'react-router-dom';

interface AdsterraSlotProps {
  id: string;
  minHeight?: string;
  className?: string;
}

const FEATURED_PROMOS = [
  {
    title: "Fiji Salary Calculator",
    desc: "Instantly estimate your net take-home pay, PAYE tax, and FNPF pension deductions using current 2026 rules.",
    slug: "fiji-salary-calculator",
    badge: "Local Finance"
  },
  {
    title: "Secure Password Generator",
    desc: "Generate unhackable, high-entropy passwords locally on your device with zero server tracking.",
    slug: "password-generator",
    badge: "Privacy First"
  },
  {
    title: "Local PDF Compressor",
    desc: "Shrink heavy PDF files directly in your browser using high-fidelity local streams with absolute confidentiality.",
    slug: "pdf-compressor",
    badge: "100% Offline"
  }
];

export default function AdsterraSlot({ id, minHeight = '150px', className = '' }: AdsterraSlotProps) {
  // Use id or hash to choose a deterministic card so it matches nicely
  const promoIndex = id.charCodeAt(0) % FEATURED_PROMOS.length;
  const promo = FEATURED_PROMOS[promoIndex];

  return (
    <div 
      className={`my-8 ${className} border-4 border-black bg-yellow-50 relative overflow-hidden flex flex-col justify-between p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
      style={{ minHeight }}
    >
      <div className="absolute top-0 right-0 text-[10px] uppercase font-black tracking-widest text-black bg-yellow-400 border-l-4 border-b-4 border-black px-3 py-1 select-none pointer-events-none z-10">
        {promo.badge}
      </div>
      
      <div className="space-y-2 mt-2">
        <h4 className="text-xl font-black uppercase text-black tracking-tight">{promo.title}</h4>
        <p className="text-sm font-bold text-gray-600 max-w-2xl">{promo.desc}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-gray-600 uppercase">Featured Utility</span>
        <Link 
          to={`/tools/${promo.slug}`}
          className="bg-black text-white px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-yellow-400 hover:text-black border-2 border-black transition-colors"
        >
          Open Free Tool →
        </Link>
      </div>
    </div>
  );
}

