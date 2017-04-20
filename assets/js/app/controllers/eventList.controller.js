(function(){
  angular
    .module('app')
    .controller('EventListController',['Event',EventListController])

  function EventListController(Event){
    var eL = this
    eL.eventList = []
    eL.dummy = []
    updateEventList()
    eL.count = 0
    eL.updateEventList = updateEventList

    function updateEventList() {
      getEvents(eL.count*10).then(function(data) {
        while(eL.dummy.length>0){
          eL.eventList.push(eL.dummy.shift())

        }
        eL.count++      
      })
    }

    function getEvents(skip) {
      return Event.getEventList(skip).then(function(data) {
         eL.dummy=data
      })
    }
  }
})();