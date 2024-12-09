// A list of starting URLs for our web crawler
const seedUrls = [
  'https://example.com',
  'https://example.org',
  'https://example.net',
];

// Function to get the starting URLs
function getSeedUrls() {
  return seedUrls;
}

module.exports = {getSeedUrls};