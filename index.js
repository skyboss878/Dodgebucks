const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/claim', (req, res) => {
  const wallet = req.query.wallet;

  if (!wallet || !wallet.startsWith('0x') || wallet.length !== 42) {
    return res.status(400).json({ error: '❌ Invalid wallet address' });
  }

  res.json({
    message: `✅ Success! Sent 1 DBUCK to ${wallet}`,
    from: process.env.WALLET_ADDRESS,
    token_api: process.env.TOKEN_API
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});
