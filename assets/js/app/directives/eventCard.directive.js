(function() {
  angular
    .module('app')
    .directive('eventCardDirective',['Event',eventCardDirective])

  function eventCardDirective(Event) {
    return{
      templateUrl:function(elem,attr) {
        return 'eventCard-'+attr.type+'.html'
      }
    }
  }
})();