const API = "http://localhost:5000/api/productos";

// Mostrar productos al cargar la página
window.onload = cargarProductos;

async function cargarProductos() {
  try {
    const res = await fetch(API);
    const productos = await res.json();
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    productos.forEach((p) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${p.nombre}</td><td>$${p.precio}</td>`;
      tbody.appendChild(fila);
    });
  } catch (err) {
    console.error("Error al cargar productos:", err);
  }
}

// Agregar nuevo producto desde el formulario
document
  .getElementById("form-producto")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, precio }),
      });

      if (res.ok) {
        cargarProductos(); // Actualiza la tabla
        e.target.reset(); // Limpia el formulario
      } else {
        console.error("Error al agregar producto:", await res.text());
      }
    } catch (err) {
      console.error("Error al enviar producto:", err);
    }
  });
