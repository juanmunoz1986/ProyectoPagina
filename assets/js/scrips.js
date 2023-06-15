$("#login").click(function () {
  alert("login realizado con éxito");
  window.location.href = "./login.html";
});

$("#Suscribir").click(function () {
  alert("Suscripción realizada con éxito");

});


$(document).ready(function () {
  // Recupera el string de usuarios del almacenamiento local
  var usuariosString = localStorage.getItem('datos');

  // Si hay algún dato en el almacenamiento local...
  if (usuariosString) {
    // Parsea el string a un objeto
    var usuariosObj = JSON.parse(usuariosString);
    var usuarios = usuariosObj.usuarios;

    // Busca si hay algún usuario con el estado 'activo' igual a true
    var usuarioActivo = usuarios.find(function (usuario) {
      return usuario.activo == true;
    });

    console.log(usuarioActivo);
    console.log(typeof usuarioActivo);  // Añade esta línea

    if (usuarioActivo !== undefined) {



      // var botonHTML ='<li class="nav-item div class=" btn-group-vertical role="group" aria-label=""><div class="btn-group" role="group"><button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+usuarioActivo.nombre+'</button><div class="dropdown-menu" aria-labelledby="dropdownId"><a class="dropdown-item" href="#">Perfil</a><a class="dropdown-item" href="#">Cerrar seccion</a></div></div></li>'
      //var botonHTML = '<li class="nav-item div class=" btn-group-vertical role="group" aria-label=""><div class="btn-group" role="group"><button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + usuarioActivo.nombre + '</button><div class="dropdown-menu" aria-labelledby="dropdownId"><a class="dropdown-item" href="./perfil.html">Perfil</a><a class="dropdown-item" href="./actualizar.html" id="">Editar Perfil</a><a class="dropdown-item" href="#" id="Mcot">Mis cotizaciones</a><a class="dropdown-item" href="#" id="cerrarSesion">Cerrar sesión</a></div></div></li>';


      var botonHTML = '<li class="nav-item div class=" btn-group-vertical role="group" aria-label=""><div class="btn-group" role="group"><button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + usuarioActivo.nombre + '</button><div class="dropdown-menu" aria-labelledby="dropdownId"><a class="dropdown-item" href="./perfil.html">Perfil</a><a class="dropdown-item" href="./actualizar.html" id="">Editar Perfil</a><a class="dropdown-item" href="./Cotizaciones.html" id="Mcot">Mis cotizaciones</a><a class="dropdown-item" href="#" id="cerrarSesion">Cerrar sesión</a></div></div></li>';






      $("header").append(botonHTML);

      console.log("Hay un usuario activo en el sistema");
    } else {
      console.log("No hay usuarios activos en el sistema");
    }

    // Si no hay datos en el almacenamiento local...
  } else {
    console.log("No hay datos de usuarios almacenados en el localStorage");
  }

  $('body').on('click', '#cerrarSesion', function () {
    // Cambia el estado del usuario a inactivo y guarda los cambios en el almacenamiento local
    usuarioActivo.activo = false;
    localStorage.setItem('datos', JSON.stringify(usuariosObj));
    // Recarga la página nuevamente
    window.location.href = "./inicio.html";

    alert('Has cerrado sesión exitosamente');
  });





});







