desactivarUsuarios();

$('#validar').submit(function (event) {
    event.preventDefault();
    
    console.log("Validando...");

    var correo = $('#correo').val();
    var contrasena = $('#clave').val();

    console.log(correo + ' ' + contrasena);

    // Intentar cargar el objeto de usuarios desde el almacenamiento local
    var usuariosJSON = localStorage.getItem('datos');
    if (!usuariosJSON) {
        console.error('No hay datos de usuarios en el almacenamiento local.');
        alert('No hay datos de usuarios en el almacenamiento local.');
        return;
    }

    // Parsear el objeto de usuarios
    var usuariosObj = JSON.parse(usuariosJSON);
    var usuarios = usuariosObj.usuarios;

    if (!Array.isArray(usuarios)) {
        console.error('Usuarios no es un array');
        return;
    }

    // Validar el correo
    var usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.correo === correo;
    });

    if (usuarioEncontrado) {
        // Verificar la contraseña
        if (usuarioEncontrado.contrasena === contrasena) {
            // El inicio de sesión es válido, actualizar el valor de "activo" a "1"
            usuarioEncontrado.activo = true;
            console.log('Inicio de sesión exitoso');

            // Guardar los cambios en el almacenamiento local (localStorage)
            localStorage.setItem('datos', JSON.stringify(usuariosObj));
            console.log('Cambios guardados correctamente en el almacenamiento local');
            window.location.href = "./inicio.html";
            
            // Aquí puedes realizar la redirección o realizar otras acciones necesarias
        } else {
            // Contraseña incorrecta
            console.error('Contraseña incorrecta');
            alert('Contraseña incorrecta');
        }
    } else {
        // El usuario no existe
        console.error('El usuario no existe');
        alert('El usuario no existe');
    }
   

});



function desactivarUsuarios() {
    // Recupera el string de usuarios del almacenamiento local
    var usuariosString = localStorage.getItem('datos');

    // Si hay algún dato en el almacenamiento local...
    if (usuariosString) {
        // Parsea el string a un objeto
        var usuariosObj = JSON.parse(usuariosString);
        var usuarios = usuariosObj.usuarios;

        // Recorre cada usuario
        for (var i = 0; i < usuarios.length; i++) {
            // Si el estado activo del usuario es true, cámbialo a false
            if (usuarios[i].activo === true) {
                usuarios[i].activo = false;
            }
        }

        // Convierte el objeto de JavaScript de nuevo a una cadena JSON
        usuariosString = JSON.stringify(usuariosObj);

        // Guarda la cadena JSON en el almacenamiento local
        localStorage.setItem('datos', usuariosString);
    } else {
        console.log("No hay datos de usuarios almacenados en el localStorage");
    }
}
