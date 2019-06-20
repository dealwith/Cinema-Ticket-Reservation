module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinema', {
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
        }
        //cityId
    })
}