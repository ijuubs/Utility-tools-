const fs = require('fs');
let code = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');

const replacement = `
          <li className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <strong className="block text-xl uppercase mb-2">Educational Value</strong>
            We don't just give you the answer; we explain the formula and the "why" behind it.
          </li>
        </ul>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Brand Assets</h2>
          <p>
            Writing an article about ToolKitPro? Need our logo for a partnership? Download our official high-resolution branding assets below.
          </p>
          <div className="border-4 border-black bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-48 h-48 border-4 border-black bg-gray-50 flex items-center justify-center p-4 shrink-0">
              <img src="/toolkitpro-logo.jpg" alt="ToolKitPro Logo" className="max-w-full max-h-full" />
            </div>
            <div className="space-y-4 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black uppercase">Official Logo</h3>
              <p className="font-medium text-black">High-resolution Neu-Brutalist logo in JPEG format.</p>
              <a 
                href="/toolkitpro-logo.jpg" 
                download="ToolKitPro_Logo.jpg"
                className="inline-block px-8 py-3 bg-yellow-400 text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                Download Logo
              </a>
            </div>
          </div>
        </section>
      </div>`;

code = code.replace(
  /<li className="border-4 border-black p-6 bg-white shadow-\[8px_8px_0px_0px_rgba\(0,0,0,1\)\]">\s*<strong className="block text-xl uppercase mb-2">Educational Value<\/strong>\s*We don't just give you the answer; we explain the formula and the "why" behind it.\s*<\/li>\s*<\/ul>\s*<\/div>/g, 
  replacement
);

fs.writeFileSync('src/pages/AboutPage.tsx', code);
