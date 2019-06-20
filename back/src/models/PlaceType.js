module.exports = (sequelize, Sequelize) => {

    return sequelize.define('timeTable', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        default: {
            type: Sequelize.STRING,
        },
        vip: {
            type: Sequelize.STRING,
        },
        couple: {
            type: Sequelize.STRING,
        }
    })
}