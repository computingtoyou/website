var app = angular.module('c2y',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.
	 when('/home', {
	 templateUrl: 'partials/home.html',
	 controller: 'HomeController'
	}).
	when('/atividades', {
	 templateUrl: 'partials/atividades.html',
	 controller: 'AtividadesController'
	}).
	when('/equipe', {
	 templateUrl: 'partials/equipe.html',
	 controller: 'EquipeController'
  }).
	otherwise({
	 redirectTo: '/home'
	});
})
