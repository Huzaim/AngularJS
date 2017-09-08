//Controllers 
apiDisplayApp.controller('homeController', ['$scope', '$location','cityService','apiAppDefaultService', function($scope, $location,cityService, apiAppDefaultService){
    
    $scope.apiName = "Weather API"; 
    
    $scope.$watch('apiName', function(){
        apiAppDefaultService.apiName = $scope.apiName;         
    }); 
    
    
    $scope.submit = function() {
        
        $location.path("//forecast")
    }; 
    
    
}]); 

