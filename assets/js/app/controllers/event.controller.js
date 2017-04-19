(function(){
  angular
    .module('app')
    .controller('EventController',['Event',$attr, EventController])

  function EventController(Event, attr) {
    var eventID = attr.id
    var event = Event.getEvent(eventID)
    this.title = event.title
    this.image = event.image
    this.date = event.date
    this.place = event.place
    this.summary = event.summary
  }
})();