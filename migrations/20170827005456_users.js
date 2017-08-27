
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
      id int(11) unsigned NOT NULL AUTO_INCREMENT,
      name varchar(255) DEFAULT NULL,
      email varchar(255) DEFAULT NULL,
      password varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
