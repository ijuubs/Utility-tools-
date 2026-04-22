import { useEffect } from 'react';

interface AdSlotProps {
  minHeight?: string;
  className?: string;
}

/**
 * AdSlot component with fixed dimensions to prevent Cumulative Layout Shift (CLS).
 */
export default function AdSlot({ minHeight = '250px', className = '' }: AdSlotProps) {
  useEffect(() => {
    // In a real AdSense implementation, you would push the ad script here
    // e.g., (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 my-8 ${className}`}
      style={{ minHeight }}
    >
      [AdSense Placeholder - {minHeight}]
    </div>
  );
}
