const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;

// Allow CORS from GASH (Change the port accordingly to gash-frontend)
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Serve static assets with correct headers
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
}));

app.listen(PORT, () => {
  console.log(`CDN running at http://localhost:${PORT}`);
});
