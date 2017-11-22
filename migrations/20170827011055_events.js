
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE events (
      id int(11) unsigned NOT NULL AUTO_INCREMENT,
      title varchar(200) DEFAULT NULL,
      dateCreated date DEFAULT NULL,
      userId int(11) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
