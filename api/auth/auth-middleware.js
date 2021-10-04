const { getBy } = require('../users/users-model');

const uniqueuser = async (req, res, next) => {
    const { username } = req.body;
    const existinguser = await getBy({username});
    if(existinguser){
        res.status(400).json({
            message: "Username taken!"
        });
    }else{
        next();
    }
}

module.exports = {
    uniqueuser
}