const { hashText } = require("../helpers/hash");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
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

  User.beforeCreate(async (user) => {
    const hashedPassword = await hashText(user.password);
    user.password = hashedPassword;
  });

  return User;
};
