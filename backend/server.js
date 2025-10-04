const express = require("express");
const app = express();

const port = 8080;

app.use(express.json());

const initialRoutes = require();
app.use(`/api/v1/auth`, initialRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
