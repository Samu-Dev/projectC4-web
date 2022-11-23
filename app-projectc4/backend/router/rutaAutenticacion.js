const express = require('express');
const passport = require('passport');

const rutaAuth = express.Router();

rutaAuth.post('/login', 
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            res.json(req.user);
        } catch (error) {
            next(error)
        }
    }
);

module.exports = rutaAuth;