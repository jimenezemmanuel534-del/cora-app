<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CORA SYSTEM</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b1220;
  color: white;
  text-align: center;
}

.section {
  display: none;
  padding: 40px 20px;
}

#home {
  padding: 60px 20px;
}

.card {
  background: #111a2e;
  padding: 25px;
  border-radius: 12px;
  max-width: 500px;
  margin: auto;
}

.btn {
  background: #00d084;
  border: none;
  padding: 12px 20px;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.link {
  color: #4ea3ff;
  cursor: pointer;
}

input {
  padding: 8px;
  width: 90%;
  margin: 5px 0;
}

#chatBox {
  text-align: left;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  background: #0e1627;
  padding: 10px;
  border-radius: 8px;
}
</style>
</head>

<body>

<!-- HOME -->
<div id="home">
  <h1>CORA SYSTEM</h1>
  <p>Elige tu acceso</p>
  <button class="btn" onclick="mostrarTrabajadores()">Trabajadores</button>
  <button class="btn" onclick="mostrarTuristas()">Turistas</button>
</div>

<!-- LOGIN TRABAJADORES -->
<div class="section" id="trabajadores">
  <div class="card">
    <h2>Acceso Trabajadores</h2>
    <input id="usuario" type="text" placeholder="Usuario">
    <input id="password" type="password" placeholder="Contraseña">
    <button class="btn" onclick="login()">Ingresar</button>
    <p class="link" onclick="volver()">Volver</p>
  </div>
</div>

<!-- CHAT TRABAJADOR -->
<div class="section" id="chatTrabajador">
  <div class="card">
    <h2>IA Interna CORA</h2>
    <div id="chatBox"></div>
    <input id="mensajeTrabajador" type="text" placeholder="Escribe tu mensaje">
    <button class="btn" onclick="enviarTrabajador()">Enviar</button>
    <p class="link" onclick="volver()">Cerrar sesión</p>
  </div>
</div>

<!-- TURISTAS -->
<div class="section" id="turistas">
  <div class="card">
    <h2>Explorar Modelo CORA</h2>
    <button class="btn" onclick="hablarTurista()">Hablar con la IA</button>
    <p class="link" onclick="volver()">Volver</p>
  </div>
</div>

<script>

function ocultarTodo() {
  document.getElementById("home").style.display = "none";
  document.getElementById("trabajadores").style.display = "none";
  document.getElementById("chatTrabajador").style.display = "none";
  document.getElementById("turistas").style.display = "none";
}

function mostrarTrabajadores() {
  ocultarTodo();
  document.getElementById("trabajadores").style.display = "block";
}

function mostrarTuristas() {
  ocultarTodo();
  document.getElementById("turistas").style.display = "block";
}

function volver() {
  ocultarTodo();
  document.getElementById("home").style.display = "block";
}

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    ocultarTodo();
    document.getElementById("chatTrabajador").style.display = "block";
  } else {
    alert("Credenciales incorrectas");
  }
}

async function enviarTrabajador() {
  const input = document.getElementById("mensajeTrabajador");
  const mensaje = input.value;
  input.value = "";

  document.getElementById("chatBox").innerHTML += "<p><b>Tú:</b> " + mensaje + "</p>";

  const respuesta = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: mensaje,
      modo: "trabajador"
    })
  });

  const data = await respuesta.json();
  document.getElementById("chatBox").innerHTML += "<p><b>IA:</b> " + (data.reply || "Sin respuesta") + "</p>";
}

async function hablarTurista() {
  const respuesta = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Explícame el modelo CORA",
      modo: "turista"
    })
  });

  const data = await respuesta.json();
  alert(data.reply || "Sin respuesta");
}

</script>

</body>
</html>
