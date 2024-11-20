// Clase Tarea para representar cada tarea
class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.fechaCreacion = new Date();
        this.completada = false;
    }

    marcarCompletada() {
        this.completada = true;
    }
}

// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
    const descripcion = document.getElementById("descripcionTarea").value.trim();

    // Validar que la descripción no esté vacía
    if (descripcion === "") {
        alert("Por favor ingresa una descripción para la tarea.");
        return;
    }

    // Crear una nueva tarea y agregarla al arreglo
    const nuevaTarea = new Tarea(descripcion);
    tareas.push(nuevaTarea);

    // Limpiar el campo de texto
    document.getElementById("descripcionTarea").value = "";

    // Mostrar las tareas actualizadas
    mostrarTareas();
}

// Función para mostrar las tareas en la lista
function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = ""; // Limpiar la lista antes de actualizar

    tareas.forEach((tarea, index) => {
        const tareaElement = document.createElement("li");
        tareaElement.className = tarea.completada ? "completada" : "";
        tareaElement.innerHTML = `
            <span>${tarea.descripcion} (Creada: ${tarea.fechaCreacion.toLocaleString()})</span>
            <input type="checkbox" onclick="marcarComoCompletada(${index})" ${tarea.completada ? 'checked' : ''}>
        `;
        listaTareas.appendChild(tareaElement);
    });
}

// Función para eliminar la tarea seleccionada
function eliminarTarea() {
    const descripcion = document.getElementById("descripcionTarea").value.trim();

    if (descripcion === "") {
        alert("Por favor ingresa una descripción para seleccionar la tarea.");
        return;
    }

    // Buscar la tarea por descripción
    const tareaIndex = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (tareaIndex !== -1) {
        tareas.splice(tareaIndex, 1); // Eliminar la tarea del arreglo
        document.getElementById("descripcionTarea").value = ""; // Limpiar campo de texto
        mostrarTareas(); // Actualizar la lista de tareas
    } else {
        alert("Tarea no encontrada. Asegúrate de que el nombre sea correcto.");
    }
}

// Función para marcar como completada una tarea
function marcarComoCompletada(index) {
    if (index >= 0 && index < tareas.length) {
        tareas[index].marcarCompletada();
        mostrarTareas(); // Actualizar la lista después de marcarla como completada
    }
}

// Mostrar las tareas al cargar la página
mostrarTareas();
