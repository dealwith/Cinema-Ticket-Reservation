module.exports = (sequelize, Sequelize) => {

    return sequelize.define('city', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false
    })
}