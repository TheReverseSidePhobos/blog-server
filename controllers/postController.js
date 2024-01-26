const ApiError = require("../error/ApiError");
const { Post } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class PostController {
  async create(req, res, next) {
    try {
      const {
        uniquePostId,
        description,
        title,
        userId,
        dueDate,
        selectedColor,
        countLikes,
      } = req.body;

      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";

      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const post = await Post.create({
        uniquePostId,
        description,
        title,
        userId,
        dueDate,
        color: selectedColor,
        countLikes,
        img: fileName,
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
