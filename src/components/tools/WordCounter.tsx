import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = (text.match(/[.!?]+/g)||[]).length;

  return (
    <div className="space-y-6">
      <textarea 
        className="w-full h-64 p-4 border-4 border-black font-medium text-black focus:outline-none focus:bg-yellow-50/10 placeholder-gray-500"
        placeholder="Paste or type your text here to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-200 border-4 border-black font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Words: <span className="text-xl block sm:inline font-bold italic">{words}</span>
        </div>
        <div className="p-4 bg-white border-4 border-black font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Characters: <span className="text-xl block sm:inline font-bold italic">{chars}</span>
        </div>
        <div className="p-4 bg-white border-4 border-black font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Sentences: <span className="text-xl block sm:inline font-bold italic">{sentences}</span>
        </div>
      </div>
    </div>
  );
}
