$(document).ready(function () {



$("#mas").click(function (e) { 
    alert("Se ha agregado un nuevo material");

    
    var tipo = $("#tipo").val();
    var material = $("#material").val();
    var Ciudad = $("#Ciudad").val();
    




    $("table tbody").append(
        "<tr>" +
        "<td>" + ($("table tbody tr").length + 1) + "</td>" +
        "<td>" + tipo + "</td>" +
        "<td>" + material + "</td>" +
        "<td>" + Ciudad + "</td>" +
        "</tr>"
    );
    
});



    $("#Gen_cot").submit(function (event) {
        event.preventDefault();


        var materialesArray = $("table tbody tr").map(function () {
            return {
                No: $(this).find('td').eq(0).text(),
                Tipo: $(this).find('td').eq(1).text(),
                Material: $(this).find('td').eq(2).text(),
                Cantidad: $(this).find('td').eq(3).text()
            };
        }).get();

        var fechaActual = new Date();
        var horaActual = fechaActual.getHours();
        var minutosActuales = fechaActual.getMinutes();

        var fechaFormateada = fechaActual.toLocaleDateString();
        var horaFormateada = horaActual + ":" + minutosActuales;

        var L_instalacion = $("#L_instalacion").val();       
        var idea = $("#idea").val();
        var materiales =  materialesArray;
        var fecha = fechaFormateada;
        var hora = horaFormateada;
        var id = Math.floor(Math.random() * 10000000) + 1;

        var nuevacompra = {
            id: id,
            L_instalacion: L_instalacion,            
            idea: idea,
            materiales: materiales,
            fecha: fecha,
            hora: hora,
            estado: "pendiente", 
            modo:"Manual"
            

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


        location.reload();
    });
});
