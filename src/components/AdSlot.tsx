import { useEffect, useRef, useState } from 'react';

interface AdSlotProps {
  minHeight?: string;
  className?: string;
  adSlot?: string; 
  adFormat?: string; 
}

export default function AdSlot({ minHeight = '250px', className = '', adSlot, adFormat = 'auto' }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    let checkCount = 0;
    const maxChecks = 10;
    let timeoutId: number;

    const tryPush = () => {
      if (!containerRef.current) return;
      
      const ins = containerRef.current.querySelector('.adsbygoogle');
      const width = containerRef.current.offsetWidth;

      // Only push if width > 0 AND it's a valid AdSense tag that hasn't been processed
      if (width > 0 && ins && !ins.hasAttribute('data-adsbygoogle-status')) {
        try {
          const adsbygoogle = (window as any).adsbygoogle || [];
          adsbygoogle.push({});
        } catch (e) {
          console.error('AdSense push error:', e);
          setAdError(true);
        }
      } else if (checkCount < maxChecks) {
        // If width is 0, wait and try again
        checkCount++;
        timeoutId = window.setTimeout(tryPush, 500);
      }
    };

    timeoutId = window.setTimeout(tryPush, 500);

    return () => window.clearTimeout(timeoutId);
  }, [adSlot, adFormat]); // Re-run if slot or format changes

  // Use a safe way to check for development environment in Vite
  const isDev = (import.meta as any).env?.DEV;

  if (adError || (isDev && !(window as any).adsbygoogle)) {
    return (
      <div className={`my-8 ${className} bg-yellow-50 border-4 border-dashed border-black flex flex-col items-center justify-center text-xs text-black font-black uppercase p-4`} style={{ minHeight }}>
        <span className="bg-yellow-400 px-2 mb-1">Ad Slot</span>
        <span>{adFormat} - {adSlot || 'Auto'}</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`my-8 ${className} z-0 relative overflow-hidden`} style={{ minHeight }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '50px' }}
        data-ad-client="ca-pub-6659085318131236"
        data-ad-slot={adSlot || "9791142997"}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
