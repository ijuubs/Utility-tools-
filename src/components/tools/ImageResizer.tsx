import { useState, useRef, ChangeEvent } from 'react';

export default function ImageResizer() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImgSrc(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const resizeImage = () => {
    if (!imgSrc || !canvasRef.current) return;
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = 200; // Fixed demo width
      canvas.height = (img.height / img.width) * 200;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imgSrc && (
        <>
            <button className="px-4 py-2 bg-black text-white font-bold" onClick={resizeImage}>Resize to 200px Width</button>
            <canvas ref={canvasRef} className="mt-4 border-2 border-black" />
        </>
      )}
    </div>
  );
}
