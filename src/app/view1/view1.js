(function() {
  'use strict';
    angular.module('myApp.view1', ['ui.router'])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
        }])
        .controller('View1Ctrl', [function() {
        }]);
})();
