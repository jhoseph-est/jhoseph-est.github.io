function mostrarSeccion(id) {
	const secciones = document.querySelectorAll(".seccion");

	// Oculta todas las secciones
	secciones.forEach((seccion) => {
		seccion.classList.remove("activa");
	});

	// Muestra la sección seleccionada
	const activa = document.getElementById(id);
	activa.classList.add("activa");
}