angular.module("StudentMod", ["ngRoute"])
	.controller("StudentCtrl", ['$http', function($http){
		var self = this;

		$http.get("http://localhost:8080/students/list_students")
			.then(function(results) {
				self.students = results.data;
			})
	}])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'

		}).when('/student', {
			templateUrl: 'views/student.html',
			controller: 'StudentCtrl',
			controllerAs: 'ctrl'

		}).when('/about', {
			templateUrl: 'views/about.html'

		})
		.otherwise({redirectTo: '/'});


	}]); // end config