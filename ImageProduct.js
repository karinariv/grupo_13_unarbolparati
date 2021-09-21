/* module.exports = (sequelize, dataTypes) => {
    alias = 'ImageProduct';
    cols = {
        id_image_product: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        picture: {
            type: dataTypes.STRING
        },
        id_product: {
            type: dataTypes.STRING
        }
    }
    config = {
        tableName = 'images_products',
        timestamps = false
    }
    
    const ImageProduct = sequelize.define(alias, cols, config);
    
    ImageProduct.associate = function(models) {
        ImageProduct.belongsTo(models.Product, {
            as: "products",
            foreignKey: "id_product"
        });
    }

    return ImageProduct;
} */