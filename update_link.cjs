const fs = require('fs');
let code = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');

const replacement = `              <a 
                href="/toolkitpro-logo.jpg" 
                download="ToolKitPro_Logo.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-yellow-400 text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >`;

code = code.replace(
  /<a\s+href="\/toolkitpro-logo\.jpg"\s+download="ToolKitPro_Logo\.jpg"\s+className="inline-block px-8 py-3 bg-yellow-400 text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-\[4px_4px_0px_0px_rgba\(0,0,0,1\)\] hover:shadow-none hover:translate-x-\[4px\] hover:translate-y-\[4px\]"\s*>/, 
  replacement
);

fs.writeFileSync('src/pages/AboutPage.tsx', code);
