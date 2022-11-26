module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "posts",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
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

  return Post;
};
