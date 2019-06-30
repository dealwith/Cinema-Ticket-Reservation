module.exports = (sequelize, Sequelize) => {

    return sequelize.define('role', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        default: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        admin: {
            type: Sequelize.INTEGER,
            defaultValue: 2
        }
    },
        {
            timestamps: false
        })
}