// Loads .env or .env.test for jest environment
const fs = require('fs');
const path = require('path');
const dotenvPath = [
  path.join(__dirname, '.env.test'),
  path.join(__dirname, '.env')
].find(p => fs.existsSync(p));
if (dotenvPath) {
  require('dotenv').config({ path: dotenvPath });
}
if (!process.env.DATABASE_URL) {
  // Fallback to default local dev connection
  process.env.DATABASE_URL = 'postgresql://autosouq:autosouq@localhost:5432/autosouq_db?schema=public';
}