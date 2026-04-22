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

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-2 border-2 border-black" />
      <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 border-2 border-black" />
      <button onClick={calculate} className="px-4 py-2 bg-black text-white font-bold">Calculate BMI</button>
      {bmi && <p className="font-bold">Your BMI: {bmi.toFixed(2)}</p>}
    </div>
  );
}
