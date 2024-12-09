const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport
passport.use(new localStrategy({
    usernameField: 'email'
    },
    async function(email, password, done) {
        try {
            // find a user and establish the identity
            const user = await User.findOne({email: email});

            if(!user || user.password != password) {
                console.log('Invalid Password');
                return done(null, false);
            }

            return done(null, true);
        } catch(err) {
            if(err) {
                console.log('Error in finding user --> Passport');
                return done(err);
            }
        }
    }
));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done) {
    try {  
        const user = await User.findById(id);

        return done(null, user);
    } catch(err) {  
        if(err) {
            console.log('Error in finding user --> Passport');
            return done(err);
        }
    }
})