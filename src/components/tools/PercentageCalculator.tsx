import { useState } from 'react';

export default function PercentageCalculator() {
  const [percentA, setPercentA] = useState<number>(20);
  const [percentB, setPercentB] = useState<number>(150);

  const [increaseA, setIncreaseA] = useState<number>(100);
  const [increaseB, setIncreaseB] = useState<number>(150);

  const [partA, setPartA] = useState<number>(50);
  const [partB, setPartB] = useState<number>(200);

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* What is X% of Y? */}
      <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
        <h3 className="font-black uppercase mb-4 text-xl border-b-2 border-black pb-2">What is X% of Y?</h3>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-bold uppercase">What is</span>
          <input
            type="number"
            value={percentA}
            onChange={(e) => setPercentA(Number(e.target.value))}
            className="w-24 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">% of</span>
          <input
            type="number"
            value={percentB}
            onChange={(e) => setPercentB(Number(e.target.value))}
            className="w-32 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">=</span>
          <span className="text-2xl font-black text-black bg-yellow-200 px-4 py-2 border-2 border-black">
            {((percentA / 100) * percentB).toLocaleString(undefined, { maximumFractionDigits: 4 })}
          </span>
        </div>
      </div>

      {/* Percentage Increase/Decrease */}
      <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
        <h3 className="font-black uppercase mb-4 text-xl border-b-2 border-black pb-2">Percentage Change</h3>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-bold uppercase">From</span>
          <input
            type="number"
            value={increaseA}
            onChange={(e) => setIncreaseA(Number(e.target.value))}
            className="w-32 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">To</span>
          <input
            type="number"
            value={increaseB}
            onChange={(e) => setIncreaseB(Number(e.target.value))}
            className="w-32 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">=</span>
          <span className="text-2xl font-black text-black bg-yellow-200 px-4 py-2 border-2 border-black">
            {((((increaseB - increaseA) / Math.abs(increaseA || 1)) * 100)).toLocaleString(undefined, { maximumFractionDigits: 4 })}%
          </span>
        </div>
        <p className="mt-4 font-bold text-sm text-gray-600">
          {increaseB > increaseA ? 'Increase' : increaseB < increaseA ? 'Decrease' : 'No Change'}
        </p>
      </div>

      {/* X is what % of Y? */}
      <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
        <h3 className="font-black uppercase mb-4 text-xl border-b-2 border-black pb-2">X is what % of Y?</h3>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            value={partA}
            onChange={(e) => setPartA(Number(e.target.value))}
            className="w-32 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">is what % of</span>
          <input
            type="number"
            value={partB}
            onChange={(e) => setPartB(Number(e.target.value))}
            className="w-32 p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100"
          />
          <span className="font-bold uppercase">=</span>
          <span className="text-2xl font-black text-black bg-yellow-200 px-4 py-2 border-2 border-black">
            {((partA / (partB || 1)) * 100).toLocaleString(undefined, { maximumFractionDigits: 4 })}%
          </span>
        </div>
      </div>

    </div>
  );
}
