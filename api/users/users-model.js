const db = require('../data/db-config');

/**
 * Queries the database to attempt to add a new user
 * @param {Object} user the user to be added to the database
 * @param {string} user.username the username of the user
 * @param {string} user.password the password of the user
 * @param {integer} user.role_id the role id of the user
 * @returns {Promise} a promise that resolves to the id of the new user
 */
const add = (user) => {
    return db('users as u').insert(user).returning('u.user_id');
}

const getBy = (filter) => {
    return db('users as u').where(filter).first('*');
}

module.exports = {
    add,
    getBy
}