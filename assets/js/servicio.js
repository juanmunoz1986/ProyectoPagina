$(document).ready(function () {


  $("#Pl").click(function (e) {

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Puertas en lamina";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL1").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }




    window.location.href = "./servicio.html";

  });

  $("#P2").click(function (e) {

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Puertas metalicas";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL2").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }


    window.location.href = "./servicio.html";



  });

  $("#P3").click(function (e) {

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Puertas en aluminio";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL3").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }


    window.location.href = "./servicio.html";



  });


  $("#P4").click(function (e) {

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Estructuras metalicas techos";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL4").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }



    window.location.href = "./servicio.html";


  });

  $("#P5").click(function (e) {

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Techos en UPVC";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL5").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }



    window.location.href = "./servicio.html";


  });


  $("#P6").click(function (e) {

    

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Canoas metalicas";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL6").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }



    window.location.href = "./servicio.html";

  });


  $("#P7").click(function (e) {

    

    

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Herrajes electricos";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL7").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }


    window.location.href = "./servicio.html";

  });

  $("#P8").click(function (e) {

   

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Pasamanos";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL8").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }



    window.location.href = "./servicio.html";


  });


  $("#P9").click(function (e) {

    

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Ventanas de aluminio";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL9").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      idea: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,      
      materiales: materiales,
      fecha: fecha,
      hora: hora,
      modo:"online",
      estado:"Pendiente"
    };

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
      console.log(typeof usuarioActivo);

      if (usuarioActivo !== undefined) {
        // Comprueba si usuarioActivo.compras es un array
        if (!Array.isArray(usuarioActivo.compras)) {
          usuarioActivo.compras = [];
        }
        usuarioActivo.compras.push(nuevacompra);
        localStorage.setItem('datos', JSON.stringify(usuariosObj));
        console.log("Hay un usuario activo en el sistema v3");
      } else {
        console.log("No hay usuarios activos en el sistema v3 ");
      }


      // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage v3");
    }




    window.location.href = "./servicio.html";




  });






});


