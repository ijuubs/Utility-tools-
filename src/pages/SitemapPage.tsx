import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TOOLS } from '../data/toolsData';
import { BLOG_POSTS } from '../data/blogData';

export default function SitemapPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <Helmet>
        <title>Sitemap | ToolKitPro</title>
        <meta name="description" content="Sitemap for ToolKitPro. Find all our utility tools and blog posts in one place." />
      </Helmet>
      
      <h1 className="text-5xl font-black uppercase tracking-tighter border-b-8 border-black pb-4">Sitemap</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black uppercase italic text-yellow-600">Main Pages</h2>
          <ul className="space-y-3 font-bold uppercase underline">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black uppercase italic text-yellow-600">Utility Tools</h2>
          <ul className="space-y-3 font-bold uppercase underline">
            {TOOLS.map(tool => (
              <li key={tool.id}><Link to={`/tools/${tool.slug}`}>{tool.name}</Link></li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black uppercase italic text-yellow-600">Blog Posts</h2>
          <ul className="space-y-3 font-bold uppercase underline">
            {BLOG_POSTS.map(post => (
              <li key={post.id}><Link to={`/blog/${post.slug}`}>{post.title}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
