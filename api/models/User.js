/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    email:{
      type: 'string',
      email: 'true',
      unique: 'true'
    },
    username:{
      type: 'string',
      unique: 'true'
    },
    encryptedPassword:{
      type: 'string'
    },
    admin:{
      type: 'boolean'
    }
  }
};

