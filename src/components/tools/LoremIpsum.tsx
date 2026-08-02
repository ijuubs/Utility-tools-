import { useState } from 'react';

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const loremSample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum vestibulum ligula, eget sodales justo accumsan vel. Mauris sit amet accumsan nunc, sed feugiat velit. Vestibulum scelerisque eleifend tempor. Cras bibendum leo sed quam dictum facilisis. In in ipsum scelerisque, facilisis neque vitae, accumsan mauris. Vestibulum ut dolor id mi pretium bibendum elementum ut arcu. Morbi bibendum lacus velit, sed finibus felis rhoncus eget. Maecenas tristique massa eu elit pulvinar suscipit. Ut lobortis dictum tellus ac efficitur. Morbi efficitur tellus vel leo varius pulvinar.";
    const result = Array(paragraphs).fill(loremSample).join('\n\n');
    setText(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
        <div className="flex-1">
          <label className="block text-xs font-black uppercase mb-1.5 text-gray-600">Number of Paragraphs</label>
          <input 
            type="number" 
            min="1" 
            max="15" 
            value={paragraphs} 
            onChange={(e) => setParagraphs(Math.max(1, Math.min(15, Number(e.target.value))))} 
            className="w-full p-3.5 border-4 border-black font-black text-lg focus:outline-none focus:bg-yellow-50/10" 
          />
        </div>
        <div className="flex gap-3">
          <button 
            type="button"
            onClick={generate} 
            className="flex-1 sm:flex-initial px-6 py-4 bg-yellow-400 border-4 border-black font-black uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Generate
          </button>
          
          {text && (
            <button 
              type="button"
              onClick={copyToClipboard} 
              className="flex-1 sm:flex-initial px-6 py-4 bg-black text-white hover:bg-yellow-300 hover:text-black border-4 border-black font-black uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
      </div>

      {text && (
        <div className="p-4 sm:p-6 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xs font-black text-gray-600 uppercase mb-2">Generated Output</p>
          <div className="font-medium text-black whitespace-pre-line leading-relaxed text-sm sm:text-base selection:bg-yellow-200">
            {text}
          </div>
        </div>
      )}
    </div>
  );
}
