import fs from 'fs';
import https from 'https';

const url = 'https://donboscoschoolshirva.com/';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<div class="thim-testimonial-item(.*?)<\/div><\/div><\/div>/gs;
    const matches = data.match(regex);
    if (matches) {
      matches.forEach((m, i) => {
        const nameMatch = m.match(/<div class="title">(.*?)<\/div>/);
        const roleMatch = m.match(/<div class="regency">(.*?)<\/div>/);
        const contentMatch = m.match(/<div class="content">(.*?)<\/div>/);
        const imgMatch = m.match(/<img.*?src="(.*?)".*?>/);
        
        console.log('--- Testimonial ' + i);
        console.log('Name:', nameMatch ? nameMatch[1].trim() : '');
        console.log('Role:', roleMatch ? roleMatch[1].trim() : '');
        console.log('Content:', contentMatch ? contentMatch[1].trim() : '');
        console.log('Img:', imgMatch ? imgMatch[1].trim() : '');
      });
    } else {
      console.log('No testimonials found');
    }
  });
}).on('error', err => {
  console.log('Error:', err.message);
});
