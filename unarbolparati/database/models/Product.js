module.exports = (sequelize, dataTypes) => {
    alias = 'Product';
    cols = {
        id_product: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre_cientifico: {
            type: dataTypes.STRING
        },
        region: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: dataTypes.STRING
        },
        altura: {
            type: dataTypes.STRING
        },
        crecimiento: {
            type: dataTypes.STRING
        },
        riego: {
            type: dataTypes.STRING
        },
        suelo: {
            type: dataTypes.STRING
        },
        clima: {
            type: dataTypes.STRING,
            allowNull: false
        },
        luz: {
            type: dataTypes.STRING
        },
        fruto: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.FLOAT
        }
    }
    config = {
        tableName = 'products',
        timestamps = false
    }
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.hasMany(models.ImageProduct, {
            as: "images_products",
            foreignKey: "id_product"
        });
        Product.belongsToMany(models.User, {
            as: "users",
            through: "products_users",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        });
    }
    return Product;
}