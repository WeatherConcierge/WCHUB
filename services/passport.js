const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    // User.id is not profile.ID but the unique 
    // identifier from mongoDB,  
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then(user => done( null, user ) )
})

passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL:'/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // Query to mlab to check if user exists. Async
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if(existingUser){
                    done(null, existingUser)
                } else {
                    new User({ googleId:profile.id }).save()
                        .then( user => done(null, user) )
                }
            })

        
    })
)

