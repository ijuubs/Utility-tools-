import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#FBCB24');
  const [copied, setCopied] = useState(false);

  const hex = color.toUpperCase();
  // Simple conversion to RGB safely
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;
  const rgbString = `rgb(${r}, ${g}, ${b})`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="border-4 border-black p-2 bg-black h-48 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <input 
            type="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            className="w-full h-full cursor-pointer border-0 bg-transparent" 
          />
        </div>
        <div className="space-y-4">
          <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xs font-black text-gray-600 uppercase mb-1">HEX Format</p>
            <div className="flex justify-between items-center gap-2">
              <span className="font-mono font-black text-xl">{hex}</span>
              <button 
                type="button"
                onClick={() => copyToClipboard(hex)}
                className="bg-black text-white hover:bg-yellow-400 hover:text-black font-black uppercase text-xs px-3 py-1.5 border-2 border-black tracking-tight transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xs font-black text-gray-600 uppercase mb-1">RGB Format</p>
            <div className="flex justify-between items-center gap-2">
              <span className="font-mono font-black text-sm sm:text-base">{rgbString}</span>
              <button 
                type="button"
                onClick={() => copyToClipboard(rgbString)}
                className="bg-black text-white hover:bg-yellow-400 hover:text-black font-black uppercase text-xs px-3 py-1.5 border-2 border-black tracking-tight transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      {copied && (
        <div className="bg-green-100 border-4 border-green-500 p-3 text-green-800 text-center font-black uppercase tracking-tight">
          Copied to Clipboard!
        </div>
      )}
    </div>
  );
}
