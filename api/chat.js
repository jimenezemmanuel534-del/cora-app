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

.hero, .section {
  padding: 40px 20px;
}

.section {
  display: none;
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
  padding: 10px 18px;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.link {
  color: #4ea3ff;
  cursor: pointer;
  margin-top: 10px;
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

<div class="hero" id="home">
  <h1>CORA SYSTEM</h1>
  <p>Elige tu acceso.</p>
  <button class="btn" onclick="showWorkers()">Trabajadores</button>
  <button class="btn" onclick="showTourists()">Turistas</button>
</div>

<!-- LOGIN TRABAJADORES -->
<div class="section" id="workers">
  <div class="card">
    <h2>Acceso Trabajadores</h2>
    <input id="user" type="text" placeholder="Usuario">
    <input id="pass" type="password" placeholder="Contraseña">
    <button class="btn" onclick="loginWorker()">Ingresar</button>
    <p class="link" onclick="goHome()">Volver</p>
  </div>
</div>

<!-- CHAT TRABAJADORES -->
<div class="section" id="workerChat">
  <div class="card">
    <h2>IA Interna CORA</h2>
    <div id="chatBox"></div>
    <input id="workerMessage" type="text" placeholder="Escribe tu mensaje...">
    <button class="btn" onclick="enviarMensaje()">Enviar</button>
    <p class="link" onclick="goHome()">Cerrar sesión</p>
  </div>
</div>

<!-- TURISTAS -->
<div class="section" id="tourists">
  <div class="card">
    <h2>Explorar Modelo CORA</h2>
    <button class="btn" onclick="hablarIA()">Hablar con la IA</button>
    <p class="link" onclick="goHome()">Volver</p>
  </div>
</div>

<script>

function showWorkers() {
  hideAll();
  document.getElementById("workers").style.display = "block";
}

function showTourists() {
  hideAll();
  document.getElementById("tourists").style.display = "block";
}

function goHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
}

function hideAll
