const User = require('../models/user');

// render the sign up page
module.exports.signUp = function(req, res) {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }

    res.render('user_sign_up', {
        title: 'todoList | Sign Up'
    });
}

// render the sign in page
module.exports.signIn = function(req, res) {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }

    res.render('user_sign_in', {
        title: 'todoList | Sign In'
    });
}

// get the sign up data
module.exports.create = async function(req, res) {
    try {
        if(req.body.password != req.body.confirm_password) {
            return res.redirect('back');
        }

        const user = await User.findOne({email: req.body.email});

        if(!user) {
            const newUser = User.create(req.body);

            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch(err) {
        if(err) {
            console.log('Error in creating user while signing up');
            return;
        }
    }
}

// sign in and create the session for the user
module.exports.createSession = function(req, res) {
    return res.redirect('/');
}

module.exports.destroySession = function(req, res) {
    req.logout(function(err) {
        if(err) {
            // You should handle the error after logging it
            return next(err);  // Pass the error to the error-handling middleware
        }
        return res.redirect('/users/sign-in');
    });
}