const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const { getUserById } = require('../controllers/authenticate');

require('dotenv').config();

module.exports = function async(passport){
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = process.env.JWT_SECRET;
    
    passport.use(new jwtStrategy(opts, async(jwt_payload, done) => {
        const userId = await getUserById(jwt_payload._id);
        if (userId) {
            return done(null, userId);
        }
        return done(null, false);
    }))
}