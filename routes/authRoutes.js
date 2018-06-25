
const passport = require('passport')

module.exports = (app) => {
    // PASS USER TO PASSPORT
    app.get('/api/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    )

    //  USER WILL HAVE THE CODE THE SECOND TIME IT HITS THIS URL
    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
        res.redirect('/u/dashboard')
    })

    app.get('/api/current_user', (req, res) => {res.send(req.user) })
    // Logging Out 
    app.get('/api/logout', (req, res) => {
        // Logout gets attached to the request object by passport 
        req.logout()
        res.send(req.user)
    })
}

