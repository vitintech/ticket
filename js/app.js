function comprar() {
      let tipo = document.getElementById("tipo-ingresso");
      let qtde = document.getElementById("qtd").value;

      if (tipo.value == "pista") {
        comprarPista(qtde);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtde);
    } else {
        comprarInferior(qtde);
    }
}

function comprarPista(qtde) {
      let qtdePista = parseInt(document.getElementById("qtd-pista").textContent);
       if (qtde > qtdePista) {
        alert("Quantidade de ingressos para pista insuficiente.");
    } else {
        qtdePista -= qtde;
        document.getElementById("qtd-pista").textContent = qtdePista;
        alert("Compra realizada com sucesso! ");
    }
}

function comprarSuperior(qtde) {
      let qtdeSuperior = parseInt(document.getElementById("qtd-superior").textContent);
       if (qtde > qtdeSuperior) {
        alert("Quantidade de ingressos para superior insuficiente.");
    } else {
        qtdeSuperior -= qtde;
        document.getElementById("qtd-superior").textContent = qtdeSuperior;
        alert("Compra realizada com sucesso! ");
    }
}

function comprarInferior(qtde) {
      let qtdeInferior = parseInt(document.getElementById("qtd-inferior").textContent);
       if (qtde > qtdeInferior) {
        alert("Quantidade de ingressos para inferior insuficiente.");
    } else {
        qtdeInferior -= qtde;
        document.getElementById("qtd-inferior").textContent = qtdeInferior;
        alert("Compra realizada com sucesso! ");
    }
}