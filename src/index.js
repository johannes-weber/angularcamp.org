import angular from 'angular';

class HomeController {
  constructor() {
    this.title = "AngularCamp";
    this.menu = [
      {url:'index.html' ,label: 'Home'},
      {url:'generic.html' ,label: 'Generic'},
      {url:'elements.html' ,label: 'Elements'}
    ]

  }
}


angular.module('angular.camp', [])
  .controller('HomeController', HomeController);

angular.bootstrap(document, ['angular.camp']);

