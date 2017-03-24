// Questa libreria può essere integrata in qualsiasi applicazione Javascript, anche in NodeJs
function chiamaServizio() {

   axios.get('http://swapi.co/api/people/1/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });   
}