const ApiError = require("../error/ApiError");
const { Like } = require("../models/models");

class LikeController {
  async create(req, res, next) {
    try {
      const { userId, uniquePostId, userEmail } = req.body;
      const like = await Like.create({
        userId,
        uniquePostId,
        userEmail,
      });
      return res.json(like);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllLikesByPostId(req, res) {
    const { uniquePostId } = req.params;

    const likes = await Like.findAll({
      where: { uniquePostId },
    });

    return res.json(likes);
  }
  async getAllLikes(req, res) {
    const likes = await Like.findAll();

    return res.json(likes);
  }

  async deleteLikeById(req, res) {
    const { uniquePostId, userId } = req.body;
    const posts = await Like.destroy({ where: { uniquePostId, userId } });

    return res.json(posts);
  }
}

module.exports = new LikeController();
