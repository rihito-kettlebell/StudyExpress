let express = require("express");
let router = express.Router();

// GET
router.get("/test", function (req, res) {
  res.json({
    message: "This is note api",
  });
});

// moduleとしてエクスポート
module.exports = router;
