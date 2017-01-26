function success () {
  notie.alert(1, 'Success!')
}
function warning () {
  notie.alert(2, 'Warning<br><b>with</b><br><i>HTML</i><br><u>included.</u>', 2)
}
function error () {
  notie.alert(3, 'Error.', 2)
}
function info () {
  notie.alert(4, 'Information.', 2)
}
function force () {
  notie.force(2, 'You cannot do that, sending you back.', 'OK', function () {
    notie.alert(3, 'Maybe when you\'re older...', 3)
  })
}
function confirm () {
  notie.confirm('Are you sure you want to do that?<br><b>That\'s a bold move...</b>', 'Yes', 'Cancel', function () {
    notie.alert(1, 'Good choice! :D', 2)
  }, function () {
    notie.alert(3, 'Aw, why not? :(', 2)
  })
  
  
}