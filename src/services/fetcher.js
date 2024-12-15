const axios = require('axios');

async function fetchHtml(url) {
  try {
    const response = await axios.get(url);
    return response.data; // HTML content
  } catch (error) {
    console.error(`Failed to fetch ${url}: ${error.message}`);
    return null;
  }
}

module.exports = { fetchHtml };
