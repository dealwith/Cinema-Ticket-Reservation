module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinemaShedule', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        dateTime: {
            type: Sequelize.DATE 
        }
    })
}