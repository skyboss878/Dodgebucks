require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Simulated faucet route
app.get('/claim', (req, res) => {
  const wallet = req.query.wallet;
  if (!wallet) return res.status(400).send('Wallet address required');

  // In real setup: interact with smart contract or API here
  res.send({
    message: `Success! Sent 1 DBUCK to ${wallet}`,
    from: process.env.WALLET_ADDRESS,
    token_api: process.env.TOKEN_API
  });
});

app.listen(PORT, () => {
  console.log(`🚰 DodgeBucks faucet live at http://localhost:${PORT}/claim`);
});
