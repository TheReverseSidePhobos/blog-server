const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "ADMIN" },
  avatar: { type: DataTypes.STRING, allowNull: true },
});

const Post = sequelize.define("post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  uniquePostId: { type: DataTypes.INTEGER },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  dueDate: { type: DataTypes.DATE },
  color: { type: DataTypes.STRING },
  countLikes: { type: DataTypes.INTEGER },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Like = sequelize.define("like", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  uniquePostId: { type: DataTypes.INTEGER },
  userEmail: { type: DataTypes.STRING },
});
Post.hasMany(Like);

Like.belongsTo(Post);
User.hasMany(Like);
Like.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  User,
  Post,
  Like,
};
