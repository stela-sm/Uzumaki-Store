import { produtos_dtb } from "./bd.js";
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if(!usuario){
    location.href = "login.html";
}else{

const carrinho = document.getElementById("carrinho");
const subtotal = document.getElementById("carrinho-preco");
const total = document.getElementById("carrinho-preco2");



function getCarrinho(usuario) {
  let num = 0;
  let carrinhoArray = JSON.parse(localStorage.getItem("carrinhos")) || [];
  carrinho.innerHTML = "";

  for (let i = 0; i < carrinhoArray.length; i++) {
    if (carrinhoArray[i]["id_usuario"] == usuario.id) {
      let id = carrinhoArray[i]["id_produto"];
      num += produtos_dtb[id - 1]["preco"];
      carrinho.innerHTML += `
       <tr>
                <td>
                  <div class="product">
                    <img src="img/${produtos_dtb[id - 1]["imagem"]}" alt="" />
                    <div class="info">
                      <div class="name">${produtos_dtb[id - 1]["titulo"]}</div>
                    </div>
                  </div>
                </td>
                <td> <p class="carrinho-preco">R$ ${produtos_dtb[id - 1]["preco"]}</td>
                </td>
                <td>
                  <button type="button" class="remove" onclick=remove(${id - 1})><i class="bx bx-x"></i></button>
                </td>
              </tr>
      `;
    }
  }
  subtotal.innerHTML = "R$" + num;
  total.innerHTML = "R$" + num;
  if(num == 0){
    carrinho.innerHTML += "<tr><td style='font-weight:600'>Seu carrinho está vazio</td></tr>"
  }
}
getCarrinho(usuario)}
