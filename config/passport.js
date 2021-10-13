import two from "passport-jwt"
const { Strategy, ExtractJwt } = two

import mongoose from 'mongoose'
const user = mongoose.model("user")

import dotenv from 'dotenv'
dotenv.config();

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;
console.log( "opts ",opts )

export const passportStrategy = passport => {
    return passport.use(
        new Strategy(opts, (jwt_payload,done) => {
        user.findById(jwt_payload.id)
        .then(user => {
            if(user){
                return done(null, user);
            }
                return done(null, false);
        })
        .catch(err => console.log (err))

})  
    )
}