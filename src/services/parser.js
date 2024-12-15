const cheerio = require('cheerio');

function extractLinks(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = new Set();

  $('a').each((_, element) => {
    let href = $(element).attr('href');
    if (href && !href.startsWith('http')) {
      href = new URL(href, baseUrl).href; // Convert to absolute URL
    }
    if (href) links.add(href);
  });

  return Array.from(links);
}

module.exports = { extractLinks };
