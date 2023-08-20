$("#nuevoUsuario").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var identificacion = $("#identificacion").val(); //capturar el valor del campo con id identificacion
    var cargo = $("#cargo").val();
    $('#usuarios tr:last').after('<tr><td>' + nombre + '</td><td>' + identificacion + '</td><td>' + cargo +'</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoUsuarioModal').modal('toggle'); //cierra el modal
});

$("#nuevoProducto").click(function() {
    var nombre = $("#nombrep").val(); //capturar el valor del campo con id nombre
    var serie = $("#nserie").val(); //capturar el valor del campo con id identificacion
    var cantidad = $("#cantidad").val();
    var ingreso = $("#ing").val();
    var expiracion = $("#exp").val();
    $('#productos tr:last').after('<tr><td>' + nombre + '</td><td>' + serie + '</td><td>' + cantidad +'</td><td>'+ingreso+'</td><td>'+expiracion+'</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoProductoModal').modal('toggle'); //cierra el modal
});
