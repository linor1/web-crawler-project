// index.js

const {getSeedUrls} = require('./services/urlSeeder');

const seedUrls = getSeedUrls();

console.log('Starting Web Crawler...');
console.log('Seed URLs:', seedUrls);