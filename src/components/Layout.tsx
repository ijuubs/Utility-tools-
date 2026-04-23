import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--g0)] text-[var(--ink)] font-sans transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-[rgba(244,250,244,0.88)] dark:bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-[var(--border)]">
        <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-black text-2xl uppercase tracking-tighter">
            <div className="w-10 h-10 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <span className="text-black text-xl font-black">TP</span>
            </div>
            ToolKitPro
          </a>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--g4)] dark:hover:text-white transition-colors">Tools</a>
            <ThemeToggle />
            <a href="/" className="bg-[var(--g4)] dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[var(--g5)] transition-colors">Browse Tools</a>
          </div>
        </nav>
      </header>
      
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="bg-[var(--g6)] text-[#efefef] py-16 px-6">
        <div className="max-w-[1200px] mx-auto text-sm font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} ToolKitPro. Premium utility ecosystem.
        </div>
      </footer>
    </div>
  );
}
