document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    // Obtener todos los datos almacenados actualmente
    var datosGuardados = JSON.parse(localStorage.getItem("datos") || "[]");

    // Agregar los nuevos datos
    var nuevoDato = {
        nombre: nombre,
        email: email,
        comentario: comentario
    };
    datosGuardados.push(nuevoDato);

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem("datos", JSON.stringify(datosGuardados));

    // Redirigir a la página de visualización
    window.location.href = "visualizar.html";
})