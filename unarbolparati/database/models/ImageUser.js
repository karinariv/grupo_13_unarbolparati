module.exports = (sequelize, dataTypes) => {
    alias = 'ImageUser';
    cols = {
        id_images_users: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        picture: {
            type: dataTypes.STRING
        },
        id_user: {
            type: dataTypes.STRING
        }
    }
    config = {
        tableName = 'images_users',
        timestamps = false
    }
    
    const ImageUser = sequelize.define(alias, cols, config);

    ImageUser.associate = function(models) {
        ImageUser.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_users"
        });
    }

    return ImageUser;
}