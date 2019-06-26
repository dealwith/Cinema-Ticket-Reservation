module.exports = (sequelize, Sequelize) => {

    return sequelize.define('timeTable', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        timestamps: false
    })
}