//Controllers 
apiDisplayApp.controller('findweatherController', ['$scope', '$location','cityService','apiAppDefaultService', function($scope, $location,cityService, apiAppDefaultService){
    
    $scope.city = cityService.city; 
    
    $scope.$watch('city', function(){
        
        cityService.city = $scope.city; 
    }); 
    
    $scope.$watch('apiName', function(){
        apiAppDefaultService.apiName = $scope.apiName;         
    }); 
    
    
    $scope.submit = function() {        
        $location.path("/forecast")
    }; 
    
    
}]); 

apiDisplayApp.controller('forecastController', ['$scope', '$resource','$routeParams','cityService',function($scope,$resource,$routeParams, cityService){
    
    $scope.city = cityService.city; 
    $scope.days = $routeParams.days || 2 ;
    
    $scope.weatherAPI= $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9db52ebca4f76a6196be27cc90dec714", {callback: "JSON_CALLBACK"}, {get:{method:"JSONP"}}); 
    
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days}); 
    
    $scope.convertToFarenhite  = function(degK){
        
        return Math.round(degK - 273.15); 
        
//        Math.round((1.8  * (degK - 273))+ 32); 
    }
    
    $scope.convertToDate = function(dt){
        
        return new Date(dt * 1000); 
        
    }
    
    console.log($scope.weatherResult); 
    
    
}]); 