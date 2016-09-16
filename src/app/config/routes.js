angular.module('invBaseApp')

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/pages/home/html/Home.html',
			controller: 'HomeController'
		});

		$urlRouterProvider.otherwise('/');
	}
]);