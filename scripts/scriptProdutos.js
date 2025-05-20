import { produtos_dtb } from "./bd.js";
import { carrinhos_dtb } from "./bd.js";

const div_produtos = document.getElementById("flexbox-produtos");
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario) {
  document.getElementById("welcomeText").textContent = "Bem-vindo(a), " + usuario.usuario + "!";
} else {
  document.getElementById("welcomeText").textContent = "Bem-vindo(a), Visitante!";
  document.getElementById("dropdown-menu").classList.add("none");
}







function insertCarrinho(usuario, id) {
  let carrinhoArray = JSON.parse(localStorage.getItem("carrinhos")) || [];
  let id_usuario = usuario.id;
  let carrinho = {
    id: carrinhoArray.length + 1,
    id_usuario: id_usuario,
    id_produto: id,
    quantidade: 1,
  };
  carrinhoArray.push(carrinho);
  localStorage.setItem("carrinhos", JSON.stringify(carrinhoArray));
}











export function comprar(id) {
  id = id + 1;
  if (usuario) {
    insertCarrinho(usuario, id);
    Swal.fire({
      title: "Sucesso!",
      text: "Produto adicionado com sucesso!",
      icon: "success",
      confirmButtonText: "OK",
    
    })

  } else {
    window.location.href = "login.html";
  }
}

window.comprar = comprar;

div_produtos.innerHTML = "";
for (let i = 0; i < produtos_dtb.length; i++) {
  div_produtos.innerHTML += `
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="img/${produtos_dtb[i]["imagem"]}" alt="Imagem de capa do card" />
      <div class="card-body">
        <p class="card-title">
          ${produtos_dtb[i]["titulo"]}
          <span class="preco">R$${produtos_dtb[i]["preco"]}</span>
        </p>
        <p class="card-text">
          <!-- Avaliação do produto -->
        </p>
        <a href="javascript:void(0)" onclick="comprar(${i})" class="btn">Comprar</a>
      </div>
    </div>
  `;
}
