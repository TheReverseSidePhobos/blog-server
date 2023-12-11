const Router = require("express");
const router = new Router();
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");
const likeRouter = require("./likeRouter");

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/like", likeRouter);

module.exports = router;
