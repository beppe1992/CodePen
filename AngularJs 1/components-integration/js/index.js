var app = angular.module("app", []);


// SERVICE CHE MANTIENE I DATI
app.factory('modelService', [function() {

	var risultati = [];
	
	return {
		getRisultati : function() {
			return risultati;
		},
		setRisultati : function(risultatiList) {
			risultati = risultatiList;
		}
	};
	
}]);


app.component('myRicerca', {
  template: `
    <h3>Search component</h3>
    <input type="text" ng-model="filtroRicerca"/>
    <button ng-click="cerca()">Cerca</button>
  `,
  controller: function(modelService,$scope) {
    $scope.filtroRicerca = "";
    $scope.cerca = function (){
         modelService.setRisultati(['risultato1','risultato2','risultato3']);
    }
  }
});

// COMPONENTE CHE VISUALIZZA I RISULTATI
app.component('myRisultati', {
  template: `
    <h3>Result component</h3>
    <ul>
      <li ng-repeat="item in risultati">{{item}}</li>
    </ul>
  `,
  controller: function(modelService,$scope) {
    
    $scope.risultati = [];
    
    $scope.$watch(function(){
				return modelService.getRisultati();
			}, function(newValue, oldValue) {
				 
			    if (newValue != oldValue){
					    $scope.risultati = modelService.getRisultati();
			    }
			});
    }
});