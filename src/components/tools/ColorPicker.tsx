import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="space-y-4 border-4 border-black p-4">
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-16" />
      <p className="font-bold text-center">Selected: <span className="font-mono bg-yellow-100 p-1">{color}</span></p>
    </div>
  );
}
