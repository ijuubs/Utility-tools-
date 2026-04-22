import { useState } from 'react';

export default function UnitConverter() {
  const [val, setVal] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const convert = (type: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return;
    if (type === 'km-m') setResult(n * 1000);
    else setResult(n / 1000);
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Value" value={val} onChange={(e) => setVal(e.target.value)} className="w-full p-2 border-2 border-black" />
      <div className="flex gap-4">
        <button onClick={() => convert('km-m')} className="px-4 py-2 bg-black text-white font-bold">km to m</button>
        <button onClick={() => convert('m-km')} className="px-4 py-2 bg-black text-white font-bold">m to km</button>
      </div>
      {result !== null && <p className="font-bold">Result: {result}</p>}
    </div>
  );
}
