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
        image: {
            type: dataTypes.BLOB
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
    return User;
}