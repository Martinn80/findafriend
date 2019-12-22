const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const apiRoutes = require("./routing/apiRoutes");
app.use("/api", apiRoutes);

const htmlRoutes = require("./routing/htmlRoutes");
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});
