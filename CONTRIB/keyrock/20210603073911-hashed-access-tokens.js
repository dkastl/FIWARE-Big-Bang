/*
MIT License

Copyright (C) 2018 Universidad Politécnica de Madrid.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Porting of https://raw.githubusercontent.com/ging/fiware-idm/FIWARE_8.1/migrations/20210603073911-hashed-access-tokens.js

// migrate_db for PostgreSQL fails. #238 - https://github.com/ging/fiware-idm/issues/238

'use strict';

const crypto = require('crypto');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('oauth_access_token', 'hash', {
      type: Sequelize.CHAR(64),
      primaryKey: false,
      allowNull: true,   // We need this to be able to fill data before disallowing null values
      defaultValue: null,
      unique: false      // Initially, all access tokens will have a null hash value
    }).then(() => {
      return queryInterface.sequelize.query("SELECT access_token FROM oauth_access_token", { type: Sequelize.QueryTypes.SELECT });
    }).then((rows) => {
      // Provide an initial value for the hash column
      return Promise.all(rows.map((row) => {
        return queryInterface.bulkUpdate(
          "oauth_access_token",
          {hash: crypto.createHash("sha3-256").update(row.access_token).digest('hex')},
          {access_token: row.access_token}
        );
      }));
    }).then(() => {
      // Remove access_token as primary key
      return queryInterface.removeConstraint('oauth_access_token', 'oauth_access_token_pkey');
    /*
      return queryInterface.removeConstraint('oauth_access_token', 'access_token');
    }).then(() => {
      return queryInterface.removeConstraint('oauth_access_token', 'PRIMARY');
    */
    }).then(() => {
      // Now that the access_token column is not a primary key
      // use an unlimited text column so JWT can be store without any problem
      return queryInterface.changeColumn('oauth_access_token', 'access_token', {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false
      });
    }).then(() => {
      // Make hash column unique
      return queryInterface.addConstraint('oauth_access_token', {
        fields: [ 'hash' ],
        type: 'unique'
      });
    }).then(() => {
      // Make hash column the primary key
      return queryInterface.addConstraint('oauth_access_token', {
        fields: [ 'hash' ],
        type: 'primary key'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('oauth_access_token', 'access_token', {
      type: Sequelize.STRING,
      allowNull: false
    }).then(() => {
      return queryInterface.removeConstraint('oauth_access_token', 'PRIMARY');
    }).then(() => {
      return queryInterface.addConstraint('oauth_access_token', {
        fields: [ 'access_token' ],
        type: 'unique'
      });
    }).then(() => {
      return queryInterface.addConstraint('oauth_access_token', {
        fields: [ 'access_token' ],
        type: 'primary key'
      });
    }).then(() => {
      return queryInterface.removeColumn('oauth_access_token', 'hash');
    });
  }
};
