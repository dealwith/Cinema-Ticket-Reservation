const Sequelize = require('sequelize');
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


City.hasMany(Cinema);
Cinema.hasMany(Room);
Movie.belongsToMany(Cinema, {through: 'CinemaMovie'});
Movie.belongsToMany(Cinema, {through: CinemaShedule});
Cinema.belongsToMany(Movie, {through: CinemaShedule});
Cinema.hasMany(Room);
Room.hasMany(Place);
PlaceType.hasMany(Place);



sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

Movie.bulkCreate([
    { name: 'Alladin', imgUrl: 'https://media.kitag.com/filer_public_thumbnails/cinepool/assets/movies/1012.351/artworks/bad5a957cacaa4b7749fc5003ea9aa2bc6eae21b/lrg.png__650x935_q70.jpg',rating: 57 },
    { name: 'Toy Story 4', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg', rating: 95 },
    { name: 'John Wick: Chapter 3 -- Parabellum', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png', rating: 66 }
    ]).then(() => { 
    
    return Movie.findAll();
    }).catch(err => console.log(err))

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
}