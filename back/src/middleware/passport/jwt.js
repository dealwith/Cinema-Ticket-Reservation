// import passportJwt from 'passport-jwt'

// const opts = {}
// opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';
// // opts.issuer = 'accounts.examplesoft.com';
// // opts.audience = 'yoursite.net';
// passportJwt.use(new passportJwt.JwtStrategy(opts, function (jwt_payload, done) {
//     User.findOne({ id: jwt_payload.sub }, function (err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);

//         }
//     });
// }));