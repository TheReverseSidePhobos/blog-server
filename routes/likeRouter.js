const Router = require("express");
const likeController = require("../controllers/likeController");
const router = new Router();

router.post("/create", likeController.create);
router.get("/getAllLikesByPostId/:postId", likeController.getAllLikesByPostId);

module.exports = router;
