module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id_user: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    /* User.associate = function(models) {
        User.hasMany(models.ImageUser, {
            as: "images_users",
            foreignKey: "id_user"
        });
        User.belongsToMany(models.Product, {
            as: "products",
            through: "products_users",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        });
    } */
    return User;
}