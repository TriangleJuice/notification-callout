'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.notificationcallout');
  } catch (e) {
    module = angular.module('awelzijn.notificationcallout', []);
  }
  module.directive('aWelzijnNotificationCallout', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/template.html'
    };
  }]);
})();
;angular.module('awelzijn.notificationcallout').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/template.html',
    "<ul class=errorMessages> <li ng-repeat=\"error in errors\"> <div class=\"alert callout-danger\" role=alert> <strong ng-show=error.title>{{error.title}}</strong>{{error.message}} </div> </li> </ul> <ul class=successMessages> <li ng-repeat=\"msg in messages\"> <div class=\"alert callout-success alert-dismissible\" role=alert> <a class=\"close float-right\" data-dismiss=alert aria-label=Sluit><i class=\"fa fa-times\"></i></a>\n" +
    "<strong ng-show=msg.title>{{msg.title}}</strong>{{msg.message}} </div> </li> </ul> <ul class=warningMessages> <li ng-repeat=\"warning in warnings\"> <div class=\"alert callout-warning alert-dismissible\" role=alert> <a class=\"close float-right\" data-dismiss=alert aria-label=Sluit><i class=\"fa fa-times\"></i></a>\n" +
    "<strong ng-show=warning.title>{{warning.title}}</strong>{{warning.message}} </div> </li> </ul>"
  );

}]);
