module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinemaShedule', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dateTime: {
            type: Sequelize.DATE 
        }
    },
    {
        timestamps: false
    })
}