// 最低限のExpressサーバ例
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // 静的ファイルを配信する場合

app.get('/', (req, res) => {
  res.send('Hello from Hole.io on Render!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
