import { Link } from 'react-router-dom';
import { TOOLS } from '../data/toolsData';

export default function HomePage() {
  return (
    <div className="space-y-20">
        <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">
              Utility Tools
            </h2>
            <p className="text-xl text-black bg-yellow-200 inline-block px-4 py-2 border-2 border-black mb-12 font-bold">
              Fast, secure, and ready-to-use tools.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
                {TOOLS.map(tool => (
                    <Link 
                      key={tool.id} 
                      to={`/tools/${tool.slug}`} 
                      className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                        <h3 className="text-2xl font-black mb-4 uppercase">{tool.name}</h3>
                        <p className="text-black font-medium">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </div>

        <section className="bg-black text-white p-10 border-4 border-black">
            <h2 className="text-4xl font-black mb-8 uppercase text-yellow-300">Popular Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {TOOLS.slice(0, 4).map(tool => (
                    <Link 
                        key={tool.id} 
                        to={`/tools/${tool.slug}`} 
                        className="p-6 bg-white text-black border-4 border-black hover:bg-yellow-100 transition-colors"
                    >
                        <h3 className="text-2xl font-black mb-2 uppercase">{tool.name}</h3>
                        <p className="font-medium">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    </div>
  );
}
