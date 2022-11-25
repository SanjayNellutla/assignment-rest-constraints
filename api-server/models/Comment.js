module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      underscored: true,
      defaultScope: {
        attributes: { exclude: [] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: [] },
        },
      },
    }
  );

  Comment.associate = ({ User }) => {
    User.hasMany(Post, { foreignKey: 'user_id' });
    Post.hasMany(Comment, { foreignKey: 'post_id' });
  };

  return Comment;
};
