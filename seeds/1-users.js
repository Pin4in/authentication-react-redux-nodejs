'use strict';

const bcrypt = require('bcrypt-nodejs');

const password = bcrypt.hashSync('test');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'test1', email: 'test1@email.com', password},
        {id: 2, name: 'test2', email: 'test2@email.com', password},
        {id: 3, name: 'test3', email: 'test3@email.com', password}
      ]);
    });
};
