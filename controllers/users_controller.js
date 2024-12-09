
// render the sign up page
module.exports.signUp = function(req, res) {
    res.render('user_sign_up', {
        title: 'todoList | Sign Up'
    })
}

// render the sign in page
module.exports.signIn = function(req, res) {
    res.render('user_sign_in', {
        title: 'todoList | Sign In'
    })
}

// get the sign up data
module.exports.create = function(req, res) {

}

// sign in and create the session for the user
module.exports.createSession = function(req, res) {

}