
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

            //capturar imagenPerfil del usuario activo
            var imagenPerfilUsuario = usuarioActivo.imagenPerfil;



            //capturar el email del usuario activo
            var emailUsuario = usuarioActivo.correo;
            //capturar el telefono del usuario activo
            var telefonoUsuario = usuarioActivo.telefono;
            //capturar id del usuario activo
            var idUsuario = usuarioActivo.id;
            //capturar la direccion del usuario activo
            var direccionUsuario = usuarioActivo.direccion;


            //mostrar el id del html
            $("#id").html("ID: " + idUsuario);

            $("#nombre").html(nombreUsuario + " " + apellidoUsuario);
            $("#telefono").html("Tel: " + telefonoUsuario);
            $("#email").html("Email: " + emailUsuario);
            $("#dire").html("Direccion: " + direccionUsuario);



            //modificar espacio src de la imagen
            $("#foto").attr("src", imagenPerfilUsuario);

            //validar si hay compras
            if (usuarioActivo.compras.length > 0) {
                //capturtar el array de compras
                var compras = usuarioActivo.compras;
                //contar el numero de compras
                var numeroCompras = compras.length;
            }

            // si hay compras imprimir si las hay
            if (numeroCompras > 0) {
                $("#compras").html("Usted tiene " + numeroCompras + " cotizaciones activas");



                //recorrer el array de compras
                for (var i = 0; i < numeroCompras; i++) {
                    //capturar el id de la compra
                    var idCompra = compras[i].id;
                    //capturar la fecha de la compra
                    var fechaCompra = compras[i].fecha;
                    //capturar la hora de la compra
                    var horaCompra = compras[i].hora;
                    //capturar la idea de la compra 
                    var ideaCompra = compras[i].idea;
                    //capturar el estado de la compra
                    var estadoCompra = compras[i].estado;


                    $("table tbody").append(
                        "<tr>" +
                        "<td>" + ($("table tbody tr").length + 1) + "</td>" +
                        "<td>" + idCompra + "</td>" +
                        "<td>" + fechaCompra +" "+horaCompra+ "</td>" +
                        "<td>" + ideaCompra+ "</td>" +
                        "<td>" + estadoCompra + "</td>" +
                        "<td>" + "aun no lo ha procesado el proveedor" + "</td>" +
                        "</tr>"
                    );





                    }



                } else {
                    $("#compras").html("No hay compras");
                }










                console.log(nombreUsuario + " " + apellidoUsuario + " " + emailUsuario + " " + telefonoUsuario + " " + idUsuario + " " + imagenPerfilUsuario);










                console.log("Hay un usuario activo en el sistema");
            } else {
                console.log("No hay usuarios activos en el sistema");
            }

            // Si no hay datos en el almacenamiento local...
        } else {
            console.log("No hay datos de usuarios almacenados en el localStorage");
        }

    });