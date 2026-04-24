import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm font-black uppercase tracking-wider mb-6 overflow-x-auto no-scrollbar whitespace-nowrap py-2">
      <Link to="/" className="flex items-center gap-1 hover:text-yellow-600 transition-colors">
        <Home size={14} />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-yellow-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400 cursor-default">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
