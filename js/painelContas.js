var formBanco = document.querySelector('.form-cartao')
var formUsuario = document.querySelector('.form-users')
var formMeses = document.querySelector('.form-meses')
var btnPesquisar = document.querySelector('#btnPesquisar')


/*IMAGEM AVATAR FIREBASE*/
// Cria uma referência à imagem no armazenamento do Firebase
var storage = firebase.storage();
var storageRef = storage.ref();
var imagemRef = storageRef.child('/CaminhoFirebaseAqui');


/*INICIA A VERIFICAO DO USUARIO*/
window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      var url = "/index.html"
      var novaUrl = url.replace('.html','')
      window.location.href = novaUrl;
    }
  })
}

// Obter a URL de download da imagem
imagemRef.getDownloadURL().then(function (url) {
  // Defina a URL de download como o atributo src da imagem
  var imagem = document.getElementById('ImageAvatar');
  imagem.src = url;
}).catch(function (error) {
  // Se ocorrer um erro ao obter a URL de download, exiba uma mensagem de erro
  console.log('Erro ao obter a URL da imagem: ' + error);
});


// Inicio Sair da conta
function sairDaConta() {
  firebase.auth().signOut().then(() => {
    var url = "/index.html"
    var novaUrl = url.replace('.html','')
    window.location.href = novaUrl;
  }).catch((error) => {
    alert('Erro ao fazer logout')
  });
}

btnPesquisar.addEventListener('click', () => {

  const banco = formBanco.options[formBanco.selectedIndex].text
  const usuario = formUsuario.options[formUsuario.selectedIndex].text
  const mes = formMeses.options[formMeses.selectedIndex].text
  const dbRef = firebase.database().ref('Contas');
  const tableContas = document.querySelector('.table')
  const txtTotais = document.querySelector('.totais')
  const txtVlTotal = document.querySelector('#vlTotal')

  dbRef.child(banco).child(mes).child(usuario).get().then((snapshot) => {

    if (snapshot.exists()) {
      const snapshotVal = snapshot.val();
      const indici = Object.keys(snapshotVal);
      for (let i = 0; i < indici.length; i++) {
        const key = indici[i];
        const dados = snapshotVal[key];
        adicionarLinha(banco, mes, usuario, dados.descricao, dados.valor)
      }
      tableContas.style.visibility = 'visible'
      txtTotais.style.visibility = 'visible'
      var total = somarColuna(4);
      var fator = 100;
      var arredondado = Math.round(total * fator) / fator;
      txtVlTotal.innerHTML = `💸 Total do mês de <strong>${mes}</strong>: R$ ${arredondado}`

    } else {
      console.log("Dados não foram encontrados");
    }
  }).catch((error) => {
    console.log(error);
  });
})

/*ADICIONAR DINAMICAMENTE OS DADOS NA TABELA */
function adicionarLinha(banco, mes, usuario, descricao, valor) {

  var tableRef = document.getElementById('minhaTabela').getElementsByTagName('tbody')[0];
  tableRef.classList.add("table-success")
  // Insere uma nova linha no final da tabela.
  var newRow = tableRef.insertRow(-1);

  // Insere as células na nova linha.
  var bancoCell = newRow.insertCell(0);
  var mesCell = newRow.insertCell(1);
  var usuarioCell = newRow.insertCell(2);
  var descricaoCell = newRow.insertCell(3);
  var valorCell = newRow.insertCell(4);
  var selecionarCell = newRow.insertCell(5);

  // Adiciona o conteúdo às células.
  bancoCell.innerHTML = banco;
  mesCell.innerHTML = mes;
  usuarioCell.innerHTML = usuario;
  descricaoCell.innerHTML = descricao;
  valorCell.innerHTML = 'R$ '+valor;
  selecionarCell.innerHTML = `<td><input  type="checkbox" id="vlSelecionado"></td>`
  check()
}

function check(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const txtTotalSelect = document.querySelector('#vlTotalCheck')
  const txtTotSelect = document.querySelector('#txtTotalSelect')
  let total = 0;
  checkboxes.forEach(checkbox => {
     checkbox.addEventListener('change', () => {
      const selecionarCell = checkbox.parentNode.parentNode.cells[4];
         const numero = selecionarCell.innerHTML.replace(/[^0-9.]/g, '');
         var valor = numero;
       if (checkbox.checked) {
         total += parseFloat(valor)
         txtTotSelect.innerHTML='Total em seleção: R$'
         txtTotalSelect.innerHTML = total.toFixed(2)
       }else{
        total -= parseFloat(valor)
        txtTotSelect.innerHTML='Total em seleção: R$'
        txtTotalSelect.innerHTML =total.toFixed(2)
       }
     });
 });
}

/*FUNÇÃO PARA SOMAR A COLUNA VALOR */
function somarColuna(coluna) {
  var table = document.getElementById('minhaTabela');
  var tbody = table.getElementsByTagName('tbody')[0];
  var linhas = tbody.getElementsByTagName('tr');
  var total = 0;

  for (var i = 0; i < linhas.length; i++) {
    var celula = linhas[i].getElementsByTagName('td')[coluna];
    var numero = parseFloat(celula.innerHTML.replace(/[^0-9.]/g, ''));
    var valor = numero;

    if (!isNaN(valor)) {
      total += valor;
    }
  }
  return total;
}
/*BOTAO PARA LIMPAR A TABELA*/
var btnLimparTabela = document.querySelector('#btnLimparTabela')
btnLimparTabela.addEventListener('click', () => {
  var tableRef = document.querySelector('#minhaTabela');
  const txtVlTotal = document.querySelector('#vlTotal')
  const txtTotalSelect = document.querySelector('#vlTotalCheck')
  const txtTotSelect = document.querySelector('#txtTotalSelect')
  // código para limpar a tabela
  for (var i = tableRef.rows.length - 1; i > 0; i--) {
    tableRef.deleteRow(i);
  }
  txtVlTotal.innerHTML = ''
  txtTotSelect.innerHTML = ''
  txtTotalSelect.innerHTML = ''
})

// Remove ".html" from all links
var links = document.querySelectorAll('a[href$=".html"]');
links.forEach(function (link) {
  var href = link.getAttribute('href');
  link.setAttribute('href', href.replace(/.html$/, ''));
});

// Remove ".html" from all buttons
var buttons = document.querySelectorAll('button[data-href$=".html"]');
buttons.forEach(function (button) {
  var href = button.getAttribute('data-href');
  button.setAttribute('data-href', href.replace(/.html$/, ''));
});