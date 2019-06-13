import Sequelize from 'sequelize';
const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
});

const User = sequelize.define("user", {
    idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
export default User