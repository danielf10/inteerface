(function(){
  angular
    .module('app')
    .service('Event',['$http',Event])

  function Event(http){
    var event={
      getEvent:getEvent,
      getEventList:getEventList
    };
    return event

    function getEventList(skip) {
      return http({
        method:'GET',
        url:'/evento/find?limit=10&skip='+skip,
      }).then(function(res){ return successEvent(res)},function(res){return failureEvent(res)})
    }

    function getEvent(eventID){
      return http({
        method:'GET',
        url:'/evento/find?where={"id":'+eventID+'}',
      }).then(function(res){return successEvent(res)},function(res){return failureEvent(res)})
    }

    function successEvent(res) {
      console.log(res.data)
      return res.data
    }

    function failureEvent(res) {
      console.log(res.statusText)
      return {}
    }

  }
})();