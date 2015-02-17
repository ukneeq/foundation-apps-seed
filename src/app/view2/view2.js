(function() {
  'use strict';
    angular.module('myApp.view2', ['ui.router'])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
            });
        }])
        .controller('View2Ctrl', [function() {
        }]);
})();
