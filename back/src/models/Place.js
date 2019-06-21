module.exports = (sequelize, Sequelize) => {

    return sequelize.define('place', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    })
}