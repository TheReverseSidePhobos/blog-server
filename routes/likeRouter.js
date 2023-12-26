const Router = require("express");
const likeController = require("../controllers/likeController");
const router = new Router();

router.post("/create", likeController.create);
router.get(
  "/getAllLikesByPostId/:uniquePostId",
  likeController.getAllLikesByPostId
);
router.get("/getAllLikes", likeController.getAllLikes);
router.post("/delete", likeController.deleteLikeById);

module.exports = router;
