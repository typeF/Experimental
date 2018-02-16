const express = require('express');
const app = express();
const passport = require('passport');
const port = process.env.PORT || 3000;
const routes = require('./routes');
const FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_APP_ID = '';
const FACEBOOK_APP_SECRET = '';

app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => {
  res.send('Successfully logged in');
});

app.get('/error', (req, res) => {
  res.send('Error logging in ');
});

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/callback'
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  (req, res) => {
    res.redirect('/success');
  }
);

app.get('/', (req, res) => {
  res.send(200)});

app.use(routes()); 

app.listen(port, () => console.log('Server listening on port ' + port));