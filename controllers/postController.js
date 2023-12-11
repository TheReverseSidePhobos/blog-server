const ApiError = require("../error/ApiError");
const { Post } = require("../models/models");

class PostController {
  async create(req, res, next) {
    try {
      console.log("req.body: ", req.body);
      const { description, title, userId, dueDate, color, countLikes } =
        req.body;
      const post = await Post.create({
        description,
        title,
        userId,
        dueDate,
        color,
        countLikes,
      });
      return res.json(post);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllByUserId(req, res) {
    const { userId } = req.params;

    const posts = await Post.findAll({
      where: { userId },
    });

    return res.json(posts);
  }
  async deletePostById(req, res) {
    const { id } = req.params;
    const posts = await Post.destroy({ where: { id } });

    return res.json(posts);
  }

  async getAllPosts(req, res) {
    const posts = await Post.findAll();

    return res.json(posts);
  }

  async updatePostById(req, res) {
    const { id } = req.params;
    const { cl } = req.body;
    const n = await Post.update(
      {
        countLikes: cl,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json({ n });
  }
}

module.exports = new PostController();
