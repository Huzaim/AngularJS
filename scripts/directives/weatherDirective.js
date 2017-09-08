//Directives 

apiDisplayApp.directive ("weatherReport", function(){
    
    return {
        
        restrict: 'E', 
        templateUrl: 'views/directives/weatherReport.html', 
        replace: true, 
           scope : {
            weatherDay : "=", 
            convertToStandard : "&", 
            convertToDate: "&", 
            dateFormat : "@"
            
        }
    }
    
}); 