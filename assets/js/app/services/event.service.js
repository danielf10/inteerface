(function(){
  angular
    .module('app')
    .service('Event',Event)

  function Event(){
    var eventList=getEventList()
    var event={
      getEvent:getEvent,
      eventList:eventList
    };
    return event

    function getEventList(argument) {
      var response
      $http({
        method:'GET',
        url:'/eventList',
      }).then(function(res){response=successEvent(res)},function(res){response=failureEvent(res)})
      return response
    }

    function getEvent(eventID){
      var response
      $http({
        method:'GET',
        url:'/event/'+eventID
      }).then(function(res){response=successEvent(res)},function(res){response=failureEvent(res)})
      return response
    }

    function successEvent(response) {
      return JSON.parse(response.data)
    }

    function failureEvent(response) {
      return {}
    }

  }
})();