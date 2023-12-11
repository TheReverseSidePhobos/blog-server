const ApiError = require("../error/ApiError");
const { Like } = require("../models/models");

class LikeController {
  async create(req, res, next) {
    try {
      console.log("req.body: ", req.body);
      const { userId, postId, userEmail } = req.body;
      const like = await Like.create({
        userId,
        postId,
        userEmail,
      });
      return res.json(like);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllLikesByPostId(req, res) {
    const { postId } = req.params;

    const likes = await Like.findAll({
      where: { postId },
    });

    return res.json(likes);
  }
}

module.exports = new LikeController();
