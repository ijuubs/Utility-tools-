import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--g0)] text-[var(--ink)] font-sans">
      <header className="sticky top-0 z-50 bg-[rgba(244,250,244,0.88)] backdrop-blur-lg border-b border-[var(--border)]">
        <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-display text-2xl text-[var(--g5)]">
            <div className="w-9 h-9 bg-[var(--g4)] rounded-[10px] grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2S8 2 4 2C2 2 0 4 0 4s4-1 7 1c2 2 2 6 2 6S11 6 17 8z"/></svg>
            </div>
            ToolVerde
          </a>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--g4)] transition-colors">Tools</a>
            <a href="/" className="bg-[var(--g4)] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[var(--g5)] transition-colors">Browse Tools</a>
          </div>
        </nav>
      </header>
      
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="bg-[var(--g6)] text-[#9bca9b] py-16 px-6">
        <div className="max-w-[1200px] mx-auto text-sm">
          &copy; {new Date().getFullYear()} ToolVerde. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
