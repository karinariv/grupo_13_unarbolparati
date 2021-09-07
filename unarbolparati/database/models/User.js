module.exports = (sequelize, dataTypes) => {
    alias = 'Users';
    cols = {
        id_users: {
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
        
        category: {
            type: dataTypes.STRING
        }
    }
    config = {
        tableName = 'users',
        timestamps = false
    }
    
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.ImageUser, {
            as: "images_users",
            foreignKey: "id_users"
        });
        User.belongsToMany(models.Product, {
            as: "products",
            through: "products_users",
            foreignKey: "id_users",
            otherKey: "id_products",
            timestamps: false
        });
    }

    return User;
}