
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE events (
      id int(11) unsigned NOT NULL AUTO_INCREMENT,
      name varchar(200) DEFAULT NULL,
      description varchar(1000) DEFAULT NULL,
      date date DEFAULT NULL,
      user_id int(11) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
