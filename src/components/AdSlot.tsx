import { useEffect, useRef, useState } from 'react';

interface AdSlotProps {
  minHeight?: string;
  className?: string;
  adSlot?: string; 
  adFormat?: string; 
}

export default function AdSlot({ minHeight = '250px', className = '', adSlot, adFormat = 'auto' }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRenderIns, setShouldRenderIns] = useState(false);
  const [isPushed, setIsPushed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const checkSizing = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const style = window.getComputedStyle(containerRef.current);
        if (width > 0 && style.display !== 'none') {
          setShouldRenderIns(true);
          return true;
        }
      }
      return false;
    };

    let resizeObserver: ResizeObserver | null = null;
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!checkSizing()) {
            // If not ready yet, observe for resize
            resizeObserver = new ResizeObserver(() => {
              if (checkSizing()) {
                resizeObserver?.disconnect();
                resizeObserver = null;
              }
            });
            resizeObserver.observe(containerRef.current!);
          }
          // Once it's intersecting, we can stop the intersection observer if it's already "ready" or if we handed off to resize observer
          // Actually, let's just keep it until sizing is confirmed
        }
      });
    }, { threshold: 0.1 });

    intersectionObserver.observe(containerRef.current);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, []);

  const [adError, setAdError] = useState(false);

  useEffect(() => {
    if (shouldRenderIns && !isPushed) {
      // Small delay to ensure the <ins> tag is actually in the DOM and rendered
      const timer = setTimeout(() => {
        const ins = containerRef.current?.querySelector('.adsbygoogle');
        // Double check status AND existence of children to avoid double-pushes
        if (ins && !ins.getAttribute('data-adsbygoogle-status') && ins.children.length === 0 && containerRef.current && containerRef.current.offsetWidth > 0) {
          try {
            (window as any).adsbygoogle = (window as any).adsbygoogle || [];
            ((window as any).adsbygoogle).push({});
            setIsPushed(true);
          } catch (e) {
            console.error('AdSense error:', e);
            setAdError(true);
          }
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [shouldRenderIns, isPushed]);

  if (adError) {
    return null; // Silently hide or could return a placeholder if desired
  }

  return (
    <div ref={containerRef} className={`my-8 ${className} z-0 relative overflow-hidden`} style={{ minHeight }}>
      {shouldRenderIns && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '100px' }}
          data-ad-client="ca-pub-6659085318131236"
          {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
