//---------------INICIO DE CODIGO PARA MODIFICAR EL MENSAJE DE REQUIRE---------------//

$('#formlg input[type=text]').on('change invalid', function() {
    var campotexto = $(this).get(0);

    campotexto.setCustomValidity('');

    if (!campotexto.validity.valid) {
      campotexto.setCustomValidity('Rellena el campo con valores alfanumericos');  
    }
});

$('#formlg input[type=password]').on('change invalid', function() {
    var campotexto = $(this).get(0);

    campotexto.setCustomValidity('');

    if (!campotexto.validity.valid) {
      campotexto.setCustomValidity('Rellena el campo con valores alfanumericos');  
    }
});

//-----------------FIN DE CODIGO PARA MODIFICAR EL MENSAJE DE REQUIRE----------------//



//-----------------INICIO DE CODIGO PARA HACER VISIBLE LA CONTRASEÑA-----------------//

function hideOrShowPassword(){
  var password1,password2,check;

  password=document.getElementById("password");
  check=document.getElementById("ver");

  if(check.checked==true)
  {
      password.type = "text";
      document.getElementById('clave').innerHTML= 'Ocultar contraseña';
  }
  else // Si no está activada
  {
      password.type = "password";
      document.getElementById('clave').innerHTML= 'Mostrar contraseña';
  }
}

//-------------------FIN DE CODIGO PARA HACER VISIBLE LA CONTRASEÑA------------------//