const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const apiRoutes = require("./routing/apiRoutes");
app.use("/", apiRoutes);

const htmlRoutes = require("./routing/htmlRoutes");
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});
