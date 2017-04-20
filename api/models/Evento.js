/**
 * Evento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string'
    },
    descripcion:{
      type: 'string'
    },
    ubicacion:{
      type: 'string'
    },
    fecha:{
      type: 'date'
    },

// Añadimos la referencia a las Noticias

    noticias:{
      collection: 'noticia',
      via: 'dueno'
    }
  }
};

