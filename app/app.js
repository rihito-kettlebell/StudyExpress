let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//　body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//　port番号指定
let port = process.env.PORT || 3000;

//　router
let router = require("./models/route/v1/");
app.use("/api/v1/", router);
// 起動
app.listen(port);
console.log("起動しました" + port);
