import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOOLS } from '../src/data/toolsData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://utilitytools.top'; // Change this to the actual domain if known

function generateSitemap() {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const sitemapFooter = `\n</urlset>`;

  const urls = [
    { loc: `${BASE_URL}/`, priority: '1.0' },
  ];

  TOOLS.forEach((tool) => {
    urls.push({
      loc: `${BASE_URL}/tools/${tool.slug}`,
      priority: '0.8',
    });
  });

  const urlNodes = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`
    )
    .join('');

  const sitemapContent = `${sitemapHeader}${urlNodes}${sitemapFooter}`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
  console.log('Sitemap successfully generated at public/sitemap.xml');
}

generateSitemap();
