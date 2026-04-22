import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function QrCodeGenerator() {
  const [text, setText] = useState('');
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text, (err, url) => {
        if (!err) setSrc(url);
      });
    }
  }, [text]);

  return (
    <div className="space-y-4">
      <input 
        type="text" 
        className="w-full p-4 border-2 border-black rounded-lg"
        placeholder="Enter URL or text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {src && <img src={src} alt="QR Code" className="mx-auto" />}
    </div>
  );
}
