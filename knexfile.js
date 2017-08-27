'use strict';

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      database: "test"
    }
  },
  production: {
      // server db config
  }
}