
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


            //capturar el nombre del usuario activo
            var nombreUsuario = usuarioActivo.nombre;
            //capturar el apellido del usuario activo
            var apellidoUsuario = usuarioActivo.apellido;          
            //capturar el email del usuario activo
            var emailUsuario = usuarioActivo.correo;
            //capturar el telefono del usuario activo
            var telefonoUsuario = usuarioActivo.telefono;           
            //capturar la direccion del usuario activo
            var direccionUsuario = usuarioActivo.direccion;
            //capturar la contraseña del usuario activo
            var contraseñaUsuario = usuarioActivo.contrasena;


            
            $("#nombre").val(nombreUsuario);
            $("#apellido").val(apellidoUsuario);
            $("#correo").val(emailUsuario);
            $("#contraseña").val(contraseñaUsuario);
            $("#direccion").val(direccionUsuario);
            $("#telefono").val(telefonoUsuario);
            

                console.log("Hay un usuario activo en el sistema");
            } else {
                console.log("No hay usuarios activos en el sistema");
            }

            // Si no hay datos en el almacenamiento local...
        } else {
            console.log("No hay datos de usuarios almacenados en el localStorage");
        }

    });










































$("#gato").click(function (event) {
    
    
    console.log("voy aca");

    

    // Obtener los valores de los campos de entrada
    var correo = $("#correo").val();
    var contrasena = $("#contraseña").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var direccion = $("#direccion").val();
    var imagenPerfil = document.getElementById("imagenPerfil");
    var archivoImagen = imagenPerfil.files[0];
   

    try {
        // El código que puede lanzar un error
        var nombreArchivoImagen = archivoImagen.name;
      } catch (error) {
        // Código para manejar o ignorar el error
        console.log('Ha ocurrido un error, pero lo estamos ignorando.');
        
      }





    // Crear el objeto con los datos del nuevo usuario
    var nuevoUsuario = {

        "correo": correo,
        "contrasena": contrasena,
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "imagenPerfil": "./image/" + nombreArchivoImagen

    };

    // Mostrar alerta con la información del nuevo usuario
    alert(JSON.stringify(nuevoUsuario, null, 2));

    // Recuperar los datos existentes en el almacenamiento local
    var datosGuardados = localStorage.getItem("datos");

    // Verifica si existen datos en el almacenamiento local
    var datos;
    if (datosGuardados) {
        // Analiza los datos existentes en formato JSON
        datos = JSON.parse(datosGuardados);
    } else {
        // Si no hay datos existentes, crea un objeto vacío
        datos = { usuarios: [] };
    }

    //buscar si hay un usuario con el estado true
    var usuarioActivo = datos.usuarios.find(function (usuario) {
        return usuario.activo == true;
    });

    //actualizar los datos del usuario activo con los datos del nuevo usuario
    usuarioActivo.correo = correo;
    usuarioActivo.contrasena = contrasena;
    usuarioActivo.nombre = nombre;
    usuarioActivo.apellido = apellido;
    usuarioActivo.telefono = telefono;
    usuarioActivo.direccion = direccion;
    usuarioActivo.imagenPerfil = "./FotoNosotros/" + nombreArchivoImagen;


    datos.usuarios.splice(usuarioActivo, 1, usuarioActivo);




    // Convertir el objeto en formato JSON
    var datosActualizados = JSON.stringify(datos);

    // Almacenar los datos actualizados en el almacenamiento local
    localStorage.setItem("datos", datosActualizados);

    window.location.href = "./inicio.html";


});

