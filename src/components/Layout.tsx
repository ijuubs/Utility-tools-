import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import CookieConsent from './CookieConsent';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--g0)] text-[var(--ink)] font-sans transition-colors duration-300 flex flex-col">
      <header className="sticky top-0 z-50 bg-[rgba(244,250,244,0.88)] dark:bg-[#1a1a1a]/80 backdrop-blur-lg border-b-4 border-black">
        <nav className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-black text-3xl uppercase tracking-tighter">
            <Logo size="md" />
            ToolKitPro
          </Link>
          <div className="flex gap-4 md:gap-8 items-center">
            <Link to="/" className="hidden md:block text-sm font-black uppercase hover:text-yellow-600 transition-colors">Tools</Link>
            <Link to="/blog" className="hidden md:block text-sm font-black uppercase hover:text-yellow-600 transition-colors">Blog</Link>
            <Link to="/about" className="hidden md:block text-sm font-black uppercase hover:text-yellow-600 transition-colors">About</Link>
            <ThemeToggle />
            <Link to="/" className="bg-black text-white px-6 py-2 border-2 border-black font-black uppercase text-sm hover:bg-yellow-400 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              Explore
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="max-w-[1200px] mx-auto px-6 py-12 flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-20 px-6 border-t-8 border-yellow-400">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 font-black text-3xl uppercase tracking-tighter text-white">
              <Logo size="md" theme="dark" />
              ToolKitPro
            </Link>
            <p className="text-gray-400 font-bold leading-relaxed">
              Premium browser-side utility ecosystem. Fast, private, and professional. No login required, ever.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-xl mb-6 text-yellow-400 italic">Core Tools</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li><Link to="/tools/word-counter" className="hover:text-yellow-400 transition-colors">Word Counter</Link></li>
              <li><Link to="/tools/pdf-compressor" className="hover:text-yellow-400 transition-colors">PDF Compressor</Link></li>
              <li><Link to="/tools/json-formatter" className="hover:text-yellow-400 transition-colors">JSON Formatter</Link></li>
              <li><Link to="/tools/bmi-calculator" className="hover:text-yellow-400 transition-colors">BMI Calculator</Link></li>
              <li><Link to="/tools/password-generator" className="hover:text-yellow-400 transition-colors">Password Generator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-xl mb-6 text-yellow-400 italic">Resources</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link to="/sitemap" className="hover:text-yellow-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-xl mb-6 text-yellow-400 italic">Legal</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li><Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-yellow-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-gray-800 text-xs font-black uppercase tracking-widest text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ToolKitPro. Designed for High-Performance Utilities.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}
