module.exports = (sequelize, Sequelize) => {

    return sequelize.define('cinema', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            unique: true
        }
    },{
        timestamps: false
    })
}