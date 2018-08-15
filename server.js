const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/hello/hello', (req, res, err) => {
  res.send({bishes: "wow!"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
