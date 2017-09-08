//Routes
apiDisplayApp.config(function($routeProvider, $locationProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.htm', 
        controller: 'findweatherController'
    })
    
    .when('/findweather', {
 
        templateUrl: 'views/weather/find.htm',
        controller: 'findweatherController'
    })
    
    .when('/forecast', {
        templateUrl: 'views/weather/forecast.htm', 
        controller: 'forecastController'
    })
    
     .when('/forecast/:days', {
        templateUrl: 'views/weather/forecast.htm', 
        controller: 'forecastController'
    })
    
   
    
    
}); 