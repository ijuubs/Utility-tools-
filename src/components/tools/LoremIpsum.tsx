import { useState } from 'react';

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState('');

  const generate = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
    setText(Array(paragraphs).fill(lorem).join('\n\n'));
  };

  return (
    <div className="space-y-4">
      <input type="number" min="1" max="10" value={paragraphs} onChange={(e) => setParagraphs(Number(e.target.value))} className="p-2 border-2 border-black" />
      <button onClick={generate} className="px-4 py-2 bg-black text-white font-bold">Generate</button>
      <div className="p-4 border-2 border-black bg-gray-50">{text}</div>
    </div>
  );
}
