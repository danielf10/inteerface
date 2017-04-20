/**
 * EventoController
 *
 * @description :: Server-side logic for managing eventoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res){
        console.log(req.body);
        Evento.create(req.body).exec(function(err,evento){
            if(err) return res.send(501,{msg: 'No se pudo crear el evento.'});
            console.log(evento);
            return res.send(201,{msg: 'Se creo el evento.'});
        });
    }
};

