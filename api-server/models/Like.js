module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "likes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      isLiked: {
        type: DataTypes.BOOLEAN,
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

  Like.associate = ({ User }) => {
    User.hasMany(Post, { foreignKey: 'user_id' });
    Post.hasMany(Like, { foreignKey: 'post_id' });
  };

  return Like;
};
