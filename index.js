const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/claim', (req, res) => {
  const wallet = req.query.wallet;
  if (!wallet) {
    return res.status(400).json({ error: 'Wallet address required' });
  }

  res.json({
    message: `Success! Sent 1 DBUCK to ${wallet}`,
    from: process.env.WALLET_ADDRESS,
    token_api: process.env.TOKEN_API
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
