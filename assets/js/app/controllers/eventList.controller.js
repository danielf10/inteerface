(function(){
  angular
    .module('app')
    .controller('EventListController',['Event',EventListController])

  function EventListController(Event){
    var eL = this
    var eventList = Event.getEventList()
    eL.currentList = []
    eL.updateEventList = updateEventList
    updateEventList()

    function updateEventList() {
      for(var i=0; eventList.length>0,i<10; ++i){
        eL.currentList.push(eventList.shift())
      }
    }
  }
})();