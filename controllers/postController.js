const ApiError = require("../error/ApiError");
const { Post } = require("../models/models");

class PostController {
  async create(req, res, next) {
    try {
      console.log("req.body: ", req.body);
      const { description, title, userId, dueDate } = req.body;
      const device = await Post.create({ description, title, userId, dueDate });
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new PostController();
