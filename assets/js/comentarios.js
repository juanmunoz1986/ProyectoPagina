// verificar si hay un vector en el local storage llamado comentarios
var comentariosString = localStorage.getItem('comentarios');
var comentarios = [];

// si existe, cargarlo en la página
if (comentariosString) {
    comentarios = JSON.parse(comentariosString);
    //recorrer el vector de comentarios
    for (var i = 0; i < comentarios.length; i++) {
        var nuevoComentario = $("<li>").addClass("list-group-item");
        $("<h5>").addClass("mb-1").text(comentarios[i].nombre).appendTo(nuevoComentario);
        $("<p>").addClass("mb-1").text(comentarios[i].comentario).appendTo(nuevoComentario);
        $("<small>").addClass("text-muted").text("Fecha: " + comentarios[i].fecha).appendTo(nuevoComentario);
        $("<small>").addClass("text-muted").text(" Calificación: " + comentarios[i].calificacion).appendTo(nuevoComentario);
        nuevoComentario.appendTo("#comentarios");
    }
}

// Función para agregar un comentario
function agregarComentario() {
    var nombre = $("#nombre").val();
    var comentario = $("#comentario").val();
    var calificacion = $('input[name="calificacion"]:checked').val();

    var fecha = new Date();
    fecha = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    // Guardar nombre, comentario, fecha y calificación en un objeto
    var comentarioObj = {
        nombre: nombre,
        comentario: comentario,
        fecha: fecha,
        calificacion: calificacion
    };

    if (nombre && comentario) {
        // Guardar el objeto en el vector de comentarios
        comentarios.push(comentarioObj);

        // Guardar el vector de comentarios en el local storage
        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        var nuevoComentario = $("<li>").addClass("list-group-item");
        $("<h5>").addClass("mb-1").text(nombre).appendTo(nuevoComentario);
        $("<p>").addClass("mb-1").text(comentario).appendTo(nuevoComentario);
        $("<small>").addClass("text-muted").text("Fecha: " + fecha).appendTo(nuevoComentario);
        $("<small>").addClass("text-muted").text(" Calificación: " + calificacion).appendTo(nuevoComentario);
        nuevoComentario.appendTo("#comentarios");

        // Limpiar los campos del formulario
        $("#nombre").val("");
        $("#comentario").val("");
        $('input[name="calificacion"]:checked').prop('checked', false);
    }
}

// Capturar el envío del formulario
$("form").submit(function(e) {
    e.preventDefault();
    agregarComentario();
});
