// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Anna', 'Garcia');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's us use our object on the click of the login button
$('#login').click(function(){
  
  // create a new "Greetr" from above
  var loginGrtr = g;

  $('#logindiv').hide();

  // fire off an HTML greeting, passing the greeting as the selector and the chosen language, and log the elcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log(); 

});