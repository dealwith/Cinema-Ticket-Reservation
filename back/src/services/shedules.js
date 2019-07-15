module.exports.findSchedules = ({ City, Cinema, Movie }) => {
    const schedules = City.findAll({
                            include: [{
                                model: Cinema,
                                include: [{
                                    model: Movie
                                }]
                            }]
                        })
    return schedules;
}