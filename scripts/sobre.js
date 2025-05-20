const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
console.log(localStorage)
if (usuario) {
  document.getElementById("welcomeText").textContent = "Bem-vindo(a), " + usuario.usuario + "!";
} else {
  document.getElementById("welcomeText").textContent = "Bem-vindo(a), Visitante!";
  document.getElementById("dropdown-menu").classList.add("none");
}

