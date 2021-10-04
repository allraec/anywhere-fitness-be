const router = require('express').Router();
const db = require('../users/users-model');
const { uniqueuser } = require('./auth-middleware');

router.post('/register', uniqueuser, async (req, res, next) => {
    try{
        const { username, password, role_id } = req.body;
        const newuser = await db.add({
            username,
            password,
            role_id
        });
        const user = newuser[0];
        res.status(201).json(user)
    }catch(error){
        console.log(error);
    }
});

module.exports = router;