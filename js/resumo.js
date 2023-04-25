/*IMAGEM AVATAR FIREBASE*/
// Cria uma referência à imagem no armazenamento do Firebase
var storage = firebase.storage();
var storageRef = storage.ref();
var imagemRef = storageRef.child('CaminhoFirebaseAqui');


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


function consultarDados() {
  const mes = document.querySelector('.form-meses')
  const mesValor = mes.options[mes.selectedIndex].text
  const nomeUsuario = document.querySelector('.form-usuario')
  const nomeUsuarioValor = nomeUsuario.options[nomeUsuario.selectedIndex].text

  const dbRef = firebase.database().ref('Contas');

  const nubank = dbRef.child('Nubank').child(mesValor).child(nomeUsuarioValor)
  const inter = dbRef.child('Inter').child(mesValor).child(nomeUsuarioValor)
  const digio = dbRef.child('Digio').child(mesValor).child(nomeUsuarioValor)
  const will = dbRef.child('Will').child(mesValor).child(nomeUsuarioValor)

  var txtVlTotal = document.querySelector('#txtValorTotal')

  var totalNubank = 0
  var totalInter = 0
  var totalDigio = 0
  var totalWillBank = 0


  nubank.get().then((snapshot) => {
    if (snapshot.exists()) {

      const snapshotVal = snapshot.val();
      const indici = Object.keys(snapshotVal);
      const txtValorBanco = document.querySelector('.tab-pane')


      for (let i = 0; i < indici.length; i++) {
        const key = indici[i];
        const dados = snapshotVal[key];

        totalNubank += parseFloat(dados.valor);
      }

      txtValorBanco.innerHTML += `<ul class=" list-group list-group-horizontal">
                                  <li class=" list-group-item list-group-item-success">Nubank</li>
                                  <li id="ValorBanco" class="list-group-item list-group-item-success">R$ ${totalNubank.toFixed(2)}</li>
                                  </ul>`

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


  inter.get().then((snapshot) => {
    if (snapshot.exists()) {

      const snapshotVal = snapshot.val();
      const indici = Object.keys(snapshotVal);
      const txtValorBanco = document.querySelector('.tab-pane')



      for (let i = 0; i < indici.length; i++) {
        const key = indici[i];
        const dados = snapshotVal[key];

        totalInter += parseFloat(dados.valor);
      }

      txtValorBanco.innerHTML += `<ul class="list-group list-group-horizontal">
                                  <li class="list-group-item list-group-item-success">Inter</li>
                                  <li id="ValorBanco" class="list-group-item list-group-item-success">R$ ${totalInter}</li>
                                  </ul>`

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.log(error);
  });



  digio.get().then((snapshot) => {
    if (snapshot.exists()) {

      const snapshotVal = snapshot.val();
      const indici = Object.keys(snapshotVal);
      const txtValorBanco = document.querySelector('.tab-pane')



      for (let i = 0; i < indici.length; i++) {
        const key = indici[i];
        const dados = snapshotVal[key];

        totalDigio += parseFloat(dados.valor);
      }

      txtValorBanco.innerHTML += `<ul class="list-group list-group-horizontal">
                                  <li class="list-group-item list-group-item-success">Digio</li>
                                  <li id="ValorBanco" class="list-group-item list-group-item-success">R$ ${totalDigio}</li>
                                  </ul>`

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.log(error);
  });



  will.get().then((snapshot) => {
    if (snapshot.exists()) {

      const snapshotVal = snapshot.val();
      const indici = Object.keys(snapshotVal);
      const txtValorBanco = document.querySelector('.tab-pane')


      for (let i = 0; i < indici.length; i++) {
        const key = indici[i];
        const dados = snapshotVal[key];

        totalWillBank += parseFloat(dados.valor);
      }

      txtValorBanco.innerHTML += `<ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-success">Will Bank</li>
        <li id="ValorBanco" class="list-group-item list-group-item-success">R$ ${totalWillBank}</li>
        </ul>`

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.log(error);
  });





  Promise.all([nubank.get(), inter.get(), digio.get(), will.get()]).then((values) => {
    let total = 0;
    values.forEach((snapshot) => {
      if (snapshot.exists()) {
        const snapshotVal = snapshot.val();
        const indici = Object.keys(snapshotVal);

        for (let i = 0; i < indici.length; i++) {
          const key = indici[i];
          const dados = snapshotVal[key];
          total += parseFloat(dados.valor);
        }
      }
    });
    txtVlTotal.innerHTML = `💸 O valor total somado é : R$ ${total.toFixed(2)}`;
  }).catch((error) => {
    console.log(error);
  });
}


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




