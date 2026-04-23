import { useState } from 'react';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w && h) setBmi(w / (h * h));
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return 'Underweight';
    if (val < 25) return 'Normal weight';
    if (val < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold uppercase mb-2">Weight (kg)</label>
          <input 
            type="number" 
            placeholder="70" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="w-full p-4 border-4 border-black font-black text-2xl" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase mb-2">Height (cm)</label>
          <input 
            type="number" 
            placeholder="175" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            className="w-full p-4 border-4 border-black font-black text-2xl" 
          />
        </div>
      </div>
      
      <button 
        onClick={calculate} 
        className="w-full py-4 bg-black text-white font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
      >
        Analyze BMI
      </button>

      {bmi && (
        <div className="p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-sm font-bold uppercase text-[var(--muted)] mb-2">Result</p>
          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-black">{bmi.toFixed(1)}</span>
            <span className="text-2xl font-bold uppercase px-4 py-1 bg-yellow-200 border-2 border-black">
                {getCategory(bmi)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
