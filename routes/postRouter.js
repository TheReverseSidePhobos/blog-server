const Router = require("express");
const router = new Router();
const postController = require("../controllers/postController");

// router.post("", function (req, res) {
//   // router.post("/", postController.create);
//   router.post("/create", postController.create);
//   // router.get("/", postController.getAll);
// });
router.post("/create", postController.create);
module.exports = router;
