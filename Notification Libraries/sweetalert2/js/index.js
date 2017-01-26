function generics () {
  swal('Messaggio Generico')
}

function domanda () {
     swal(
      'Domanta?',
      'Sicuro?',
      'question'
    )
}

function success () {
     swal(
      'Grande',
      'Mitico',
      'success'
    )
}


function timeout () {
     swal({
  title: 'Alert con timeout!',
  text: 'Si chiudera\' tra 5 secondi.',
  timer: 5000
    }).then(
      function () {},
      // handling the promise rejection
      function (dismiss) {
        if (dismiss === 'timer') {
          console.log('Chiuso il popup')
        }
      }
    )
}