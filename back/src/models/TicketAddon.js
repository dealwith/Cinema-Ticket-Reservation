module.exports = (sequelize, Sequelize) => {

    return sequelize.define('ticketAddon', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    },
    {
        timestamps: false
    })
}