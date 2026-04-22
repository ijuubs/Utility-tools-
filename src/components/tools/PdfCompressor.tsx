import { useState } from 'react';

export default function PdfCompressor() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-4">
      <input 
        type="file" 
        accept=".pdf"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-black hover:file:bg-yellow-200"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      {file && (
        <div className="p-4 border-2 border-black">
          <p>File selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</p>
          <button className="mt-4 px-4 py-2 bg-black text-white font-bold" onClick={() => alert('Compression demo feature')}>Compress PDF</button>
        </div>
      )}
    </div>
  );
}
