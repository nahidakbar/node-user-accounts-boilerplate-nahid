"use strict";


const Auth = require('./Auth');
const Strategy = require('passport-facebook')
  .Strategy;

/**
 * OAuth login using facebook login provider
 *
 * Requires ```passport-facebook``` package.
 */
class FacebookAuth extends Auth
{

  /**
   * @param {object} options see Auth class + additional options for email configuration.
   */
  constructor(options = {})
  {
    super('facebook', options);
    this.description.redirect = true;

    /**
     * OAuth 2 Client ID
     */
    this.facebookClientID = options.facebookClientID;

    /**
     * OAuth 2 Client Secret
     */
    this.facebookClientSecret = options.facebookClientSecret;

    /**
     * Should it construct urls based on proxy headers.
     */
    this.proxy = options.proxy || false;
  }

  /**
   * @override
   */
  install(app, prefix, passport)
  {
    passport.use(new Strategy({
        clientID: this.facebookClientID,
        clientSecret: this.facebookClientSecret,
        callbackURL: `${prefix}/callback.json`,
        scope: ['email', 'public_profile'],
        state: true,
        passReqToCallback: true,
        proxy: this.proxy,
      }, (req, accessToken, refreshToken, profile, done) =>
      this.handleUserLoginByProfile(null, profile, done, req)));

    app.all(`${prefix}/login.json`, passport.authenticate('facebook', {}));

    app.all(`${prefix}/callback.json`, passport.authenticate('facebook', this.authenticateOptions), this.loggedIn(true));
  }

  createUserFromProfile(profile)
  {
    profile._json = profile._json || {};
    profile._json.publicProfileUrl = profile._json.publicProfileUrl || `https://www.facebook.com/${profile.id}`;
    return super.createUserFromProfile(profile);
  }
}

module.exports = FacebookAuth;
