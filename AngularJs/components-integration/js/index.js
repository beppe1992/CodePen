var app = angular.module("app", []);

app.component('myRicerca', {
  template: `
    <h3>Search component</h3>
    <input type="text" ng-model="$ctrl.filtroRicerca"/>
    <button ng-click="$ctrl.cerca()">Cerca</button>
  `,
  controller: function() {
    this.filtroRicerca = "";
    this.cerca = function (){
         this.risultati = ['risultato1','risultato2','risultato3']
    }
  },
  bindings: {
    risultati: '=',
  }
});

// COMPONENTE CHE VISUALIZZA I RISULTATI
app.component('myRisultati', {
  template: `
    <h3>Result component</h3>
    <ul>
      <li ng-repeat="item in $ctrl.risultati">{{item}}</li>
    </ul>
  `,
  bindings: {
    risultati: '=',
  }
});