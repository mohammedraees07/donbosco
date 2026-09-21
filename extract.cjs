const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('scrape.html'));
const testimonials = [];
$('.thim-testimonial-item').each((i, el) => {
  const name = $(el).find('.title').text().trim();
  const role = $(el).find('.regency').text().trim();
  const quote = $(el).find('.content').text().trim();
  const image = $(el).find('.author-avatar img').attr('src') || $(el).find('img').attr('src') || '';
  if (name) {
    testimonials.push({name, role, quote, image});
  }
});
console.log(JSON.stringify(testimonials, null, 2));
