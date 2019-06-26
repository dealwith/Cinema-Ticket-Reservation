module.exports = (sequelize, Sequelize) => {

    return sequelize.define('room', {
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