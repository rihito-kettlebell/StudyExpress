let express = require("express");

// ルーティングの設定
let router = express.Router();

// ルーティング操作
router.get("/", function(req, res){
  res.json({
    message: "Hello, world"
  });
});

// モジュールとしてエクスポートし、外部で使えるようにする。変数を代入。
module.exports = router;