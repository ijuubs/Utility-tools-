import { useState } from 'react';

export default function JsonFormatter() {
  const [json, setJson] = useState('');
  const [error, setError] = useState('');

  const formatJson = (minify: boolean) => {
    try {
      setError('');
      const parsed = JSON.parse(json);
      setJson(minify ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-4">
      <textarea 
        className="w-full h-48 p-4 border-2 border-black rounded-lg font-mono"
        placeholder='{"key": "value"}'
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />
      {error && <p className="text-red-600 font-bold">Error: {error}</p>}
      <div className="flex gap-4">
        <button onClick={() => formatJson(false)} className="px-4 py-2 bg-black text-white font-bold">Prettify</button>
        <button onClick={() => formatJson(true)} className="px-4 py-2 border-2 border-black font-bold">Minify</button>
      </div>
    </div>
  );
}
