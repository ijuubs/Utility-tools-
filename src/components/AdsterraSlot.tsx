import { useEffect, useRef } from 'react';

interface AdsterraSlotProps {
  id: string;
  minHeight?: string;
  className?: string;
}

/**
 * AdsterraSlot component for rendering individual Adsterra banner units.
 * Note: Adsterra usually provides a script that targets a specific div or creates its own.
 */
export default function AdsterraSlot({ id, minHeight = '90px', className = '' }: AdsterraSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !id) return;

    // Check if the script is already there
    const existingScript = document.getElementById(`adsterra-script-${id}`);
    if (existingScript) return;

    // Adsterra banners typically require reaching into the DOM or using their 'invoke.js'
    // Since we don't have a specific banner key yet, this serves as a placeholder 
    // container that follows our Neu-Brutalism design rules.
  }, [id]);

  return (
    <div 
      ref={containerRef} 
      className={`my-8 ${className} border-4 border-black bg-white relative overflow-hidden flex flex-col items-center justify-center`}
      style={{ minHeight }}
    >
      <div className="absolute top-0 left-0 text-[10px] uppercase font-black tracking-widest text-white bg-black px-2 py-0.5 select-none pointer-events-none z-10">
        Partner Ad
      </div>
      
      {/* Informational placeholder for dev/setup */}
      <div className="text-center p-4">
        <p className="text-[10px] font-black uppercase text-gray-400">Adsterra Slot: {id}</p>
        <p className="text-[8px] italic text-gray-500 uppercase">Privacy-safe ad ecosystem</p>
      </div>
    </div>
  );
}
