
const sitemap = require('sitemap');
const hostname = 'https://www.easymediaagency.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/work', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/footer', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
