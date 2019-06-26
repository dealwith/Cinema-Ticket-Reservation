module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinema', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cinemaId: {
            type: Sequelize.INTEGER
        },
        movieId: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    })
}