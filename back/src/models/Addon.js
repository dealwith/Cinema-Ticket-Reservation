module.exports = (sequelize, Sequelize) => {

    return sequelize.define('addon', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        popcorn: {
            type: Sequelize.INTEGER,
        },
        cocaCola: {
            type: Sequelize.INTEGER,
        }
    },
    {
        timestamps: false
    })
}