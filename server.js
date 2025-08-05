const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/intern', (req, res) => {
  console.log("✅ Intern data requested");
  res.json({
    name: "Sanjay Ellur",
    referralCode: "sanjay2025",
    donationAmount: 4200
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
