
if (localStorage.getItem("usuarioLogado") === null) {
  console.log(localStorage)
  function dicionario() {
    if (!localStorage.getItem("banco de dados")) {
      let dados = [
        { id: 1, usuario: "Pedro", email: "Pedro@gmail.com", senha: "1111" },
        { id: 2, usuario: "Carol", email: "Carol@gmail.com", senha: "2222" },
        { id: 3, usuario: "Laura", email: "Laura@gmail.com", senha: "3333" },
      ];

      let meujson = JSON.stringify(dados);

      localStorage.setItem("banco de dados", meujson);
    }
  }
  dicionario();
  function logar() {
    let em = document.querySelector("#email").value;
    let sn = document.querySelector("#senha").value;

    // let email = "Laura@gmail.com"
    //let senha = "1234"

    let dados = JSON.parse(localStorage.getItem("banco de dados"));

    for (let i = 0; i < dados.length; i++) {
      if (em == dados[i].email && dados[i].senha == sn) {
        console.log("mesmo usuario" + i);
        localStorage.setItem("usuarioLogado", JSON.stringify(dados[i]));
        Swal.fire({
          title: "Bem vindo!",
          text: "Login no Jutsu realizado com sucesso!",
          icon: "success",
          confirmButtonText: "OK",
        
        }).then(() => {
          window.location.href = "index.html";
        });

        return;
      }
    }
    Swal.fire({
      title: "Ops!",
      text: "Jutsu falhou! Seu chakra está desalinhado ou você usou o jutsu errado...Verifique seu email e senha, jovem ninja!",
      icon: "error",
      confirmButtonText: "OK",
    
    });
  }

  function cadastrar() {
    let usuario = document.querySelector("#usuario").value;
    let email = document.querySelector("#emailN").value;
    let senha = document.querySelector("#senhaN").value;

    if (!usuario || !email || !senha) {
      Swal.fire({
        title: "Atenção!",
        text: "Preencha todos os campos",
        icon: "warning",
        confirmButtonText: "OK",
      
      })

      return;
    }

    let dados = JSON.parse(localStorage.getItem("banco de dados")) || [];

    let existe = dados.find((u) => u.email === email);
    if (existe) {
      Swal.fire({
        title: "Ops!",
        text: "Esse email já está cadastrado",
        icon: "warning",
        confirmButtonText: "OK",
      
      })

      return;
    }

    let novoId = dados.length > 0 ? dados[dados.length - 1].id + 1 : 1;

    let novoUsuario = {
      id: novoId,
      usuario: usuario,
      email: email,
      senha: senha,
    };

    dados.push(novoUsuario);
    localStorage.setItem("banco de dados", JSON.stringify(dados));
    Swal.fire({
      title: "Bem vindo!",
      text: "Cadastro realizado com sucesso! Você será redirecionado para a página de login.",
      icon: "success",
      confirmButtonText: "OK",
    
    }).then(() => {
    window.location.href = "login.html";
  })
  }

  // Recupera o nome do usuário do localStorage
  let usuarioLogado = localStorage.getItem("usuarioLogado");

}else{
  window.location.href="index.html"
}