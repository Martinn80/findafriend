let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let PORT = process.env.PORT || 8000;
let app = express();


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
