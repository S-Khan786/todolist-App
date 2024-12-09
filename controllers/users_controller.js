module.exports.profile = function(req, res) {
    res.end('<h1>User Profile<\h1>')
}

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