const Sequelize = require('sequelize');
const seed = require('./seed').seed;
const UserModel = require('./models/User');
const CityModel = require('./models/City');
const CinemaModel = require('./models/Cinema');
const MovieModel = require('./models/Movie');
const CinemaSheduleModel = require('./models/CinemaShedule');
const TimeTableModel = require('./models/TimeTable');
const RoomModel = require('./models/Room');
const PlaceModel = require('./models/Place');
const PlaceTypeModel = require('./models/PlaceType');
const TicketModel = require('./models/Ticket');
const AddonModel = require('./models/Addon');
const TicketAddonModel = require('./models/TicketAddon');
const RoleModel = require('./models/Role');
const Op = Sequelize.Op

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
const Ticket = TicketModel(sequelize, Sequelize);
const Addon = AddonModel(sequelize, Sequelize);
const TicketAddon = TicketAddonModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);


Role.belongsTo(User);
City.hasMany(Cinema);
Cinema.hasMany(Room);
Movie.belongsToMany(Cinema, {through: CinemaShedule});
Cinema.belongsToMany(Movie, {through: CinemaShedule});
Cinema.hasMany(Room);
Room.hasMany(Place);
PlaceType.hasMany(Place);

seed(City, Cinema, Movie, CinemaShedule, Role);

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({force: false})
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    Op,
    User,
    City,
    Cinema,
    Movie,
    CinemaShedule,
    TimeTable,
    Room,
    Place,
    PlaceType,
    Ticket,
    Addon,
    TicketAddon,
    Role,
}