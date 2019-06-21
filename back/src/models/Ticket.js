module.exports = (sequelize, Sequelize) => {

    return sequelize.define('ticket', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    })
}