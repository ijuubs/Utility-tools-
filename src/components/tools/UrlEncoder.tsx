import { useState } from 'react';

export default function UrlEncoder() {
  const [input, setInput] = useState('');

  return (
    <div className="space-y-4">
      <input type="text" className="w-full p-4 border-2 border-black" value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-black text-white font-bold" onClick={() => setInput(encodeURIComponent(input))}>Encode</button>
        <button className="px-4 py-2 bg-black text-white font-bold" onClick={() => setInput(decodeURIComponent(input))}>Decode</button>
      </div>
    </div>
  );
}
