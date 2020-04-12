let express = require("express");

// ルーティングの設定
let router = express.Router();

// ルーティング操作
router.use("/note", require("./note.js"));
router.use("/user", require("./user.js"));

// モジュールとしてエクスポートし、外部で使えるようにする。変数を代入。
module.exports = router;