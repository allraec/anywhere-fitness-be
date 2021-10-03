const router = require('express').Router();
const db = require('../users/users-model');

router.post('/register', async (req, res, next) => {
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