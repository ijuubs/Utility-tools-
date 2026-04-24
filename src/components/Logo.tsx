import { Wrench, Cpu } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export default function Logo({ className = '', size = 'md', theme = 'light' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  const baseColor = theme === 'light' ? 'bg-yellow-400' : 'bg-black';
  const borderColor = theme === 'light' ? 'border-black' : 'border-white';
  const iconColor = theme === 'light' ? 'text-black' : 'text-yellow-400';
  const shadowColor = theme === 'light' ? 'rgba(0,0,0,1)' : 'rgba(251,191,36,1)';

  return (
    <div className={`relative ${sizes[size]} ${baseColor} border-4 ${borderColor} shadow-[4px_4px_0px_0px_${shadowColor}] flex items-center justify-center overflow-hidden transition-all hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <Cpu className="w-full h-full p-1" />
      </div>
      <Wrench strokeWidth={3} className={`relative z-10 ${iconColor}`} size={iconSizes[size]} />
    </div>
  );
}
