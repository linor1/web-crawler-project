// index.js

const {getSeedUrls} = require('./services/urlSeeder');
const { addUrl, getNextUrl } = require('./services/urlStorage');

const seedUrls = getSeedUrls();

console.log('Starting Web Crawler...');

console.log('Seed URLs:', seedUrls);
seedUrls.forEach((url) => addUrl(url));




