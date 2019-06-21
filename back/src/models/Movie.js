module.exports = (sequelize, Sequelize) => {

    return sequelize.define('movie', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        imgUrl: {
            type: Sequelize.STRING,
            validate: {
                isUrl: true,
                
            }
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        }
    })
}