const Router = require("express");
const router = new Router();
const postController = require("../controllers/postController");

router.post("/create", postController.create);
router.get("/getAllByUserId/:userId", postController.getAllByUserId);
router.delete("/:id", postController.deletePostById);
router.put("/updatePostById/:id", postController.updatePostById);

module.exports = router;
