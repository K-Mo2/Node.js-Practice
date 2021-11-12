const express = require("express");

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }

  res.send({
    address: "street,city,country",
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
