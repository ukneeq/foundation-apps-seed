(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',

    // Subsection Views
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
