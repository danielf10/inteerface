(function(){
  angular
    .module('app')
    .controller('EventController',['Event','$attrs', EventController])

  function EventController(Event, attr) {
    var eC=this
    var eventID = attr.id
    getEvent(eventID)

    function getEvent(eventID) {
      Event.getEvent(eventID).then(function(data) {
        var event=data
        eC.title = event.nombre
        eC.image = event.imagen
        eC.date = event.fecha
        eC.place = event.ubicacion
        eC.summary = event.descripcion
      })
    }
  }
})();