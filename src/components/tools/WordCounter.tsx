import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = (text.match(/[.!?]+/g)||[]).length;

  return (
    <div className="space-y-4">
      <textarea 
        className="w-full h-48 p-4 border-2 border-black rounded-lg"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-100 border-2 border-black font-bold">Words: {words}</div>
        <div className="p-4 bg-yellow-100 border-2 border-black font-bold">Chars: {chars}</div>
        <div className="p-4 bg-yellow-100 border-2 border-black font-bold">Sentences: {sentences}</div>
      </div>
    </div>
  );
}
