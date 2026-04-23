import { useState } from 'react';

const CONVERSIONS: Record<string, number> = {
  'km-m': 1000,
  'm-km': 0.001,
  'mi-km': 1.60934,
  'km-mi': 0.621371,
  'kg-lb': 2.20462,
  'lb-kg': 0.453592,
};

export default function UnitConverter() {
  const [val, setVal] = useState('');
  const [type, setType] = useState('km-m');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return;
    setResult(n * CONVERSIONS[type]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold uppercase mb-2">Value</label>
          <input 
            type="number" 
            placeholder="0" 
            value={val} 
            onChange={(e) => setVal(e.target.value)} 
            className="w-full p-3 border-4 border-black font-black" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase mb-2">Conversion</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border-4 border-black font-black bg-white"
          >
            {Object.keys(CONVERSIONS).map(key => (
              <option key={key} value={key}>{key.replace('-', ' to ')}</option>
            ))}
          </select>
        </div>
      </div>
      
      <button 
        onClick={handleConvert} 
        className="w-full py-4 bg-black text-white font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
      >
        Convert Now
      </button>

      {result !== null && (
        <div className="p-6 bg-yellow-200 border-4 border-black">
          <p className="text-sm font-bold uppercase mb-1">Result</p>
          <p className="text-4xl font-black">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
        </div>
      )}
    </div>
  );
}
