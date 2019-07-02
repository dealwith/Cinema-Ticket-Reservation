module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinemaShedule', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dateTime: {
            type: Sequelize.DATE 
        },
        seats:{
            type: Sequelize.INTEGER
        },
        movieId: {
            type: Sequelize.INTEGER
        },
        cinemaId: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    })
}