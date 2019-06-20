const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const CityModel = require('./models/CityModel');
const CinemaModel = require('./models/CinemaModel');
const MovieModel = require('./models/MovieModel');
const CinemaSheduleModel = require('./models/CinemaSheduleModel');
const TimeTableModel = require('./models/TimeTableModel');
const RoomModel = require('./models/RoomModel');
const PlaceModel = require('./models/PlaceModel');
const PlaceTypeModel = require('./models/PlaceTypeModel');

const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
}); 

const User = UserModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);
const Cinema = CinemaModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);
const CinemaShedule = CinemaSheduleModel(sequelize, Sequelize);
const TimeTable = TimeTableModel(sequelize, Sequelize);
const Room = RoomModel(sequelize, Sequelize);
const Place = PlaceModel(sequelize, Sequelize);
const PlaceType = PlaceTypeModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({force: false})
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
    User,
    City,
    Cinema,
    Movie,
    CinemaShedule,
    TimeTable,
    Room,
    Place,
    PlaceType,
}