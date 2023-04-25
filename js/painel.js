/*VARIAVEIS GLOBAIS*/
var selecionarBanco = document.querySelector('.selecionarBanco')
var btnNovo = document.querySelector('#btnNovo')
var formBanco = document.querySelector('.form-banco')
var selecionarUser = document.querySelector('.formSelecionarUsuario')
var cartaoBanco = document.querySelector('.cartaoBanco')
var InsereDados = document.querySelector('.forms')
var formUsuario = document.querySelector('.form-usuario')
var formMeses = document.querySelector('.form-meses')
var tooltips = document.querySelectorAll('[data-toggle="tooltip"]')
var btnInserirDados = document.querySelector('#btnInserirDados')
var toastMensagemError = document.querySelector('#liveToast')
var toastMensagemSucess = document.querySelector('#liveToastSucess')
var audioError = document.getElementById("audioLoginError")
var audioSucess = document.getElementById("audioLoginSucess")
var modal = document.querySelector('dialog')

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

// Inicio Sair da conta
function sairDaConta() {
    firebase.auth().signOut().then(() => {
        var url = "/index.html"
        var novaUrl = url.replace('.html','')
        window.location.href = novaUrl;
    }).catch((error) => {
        alert('Erro ao fazer logout')
        console.log(error)
    });
}

/*IMAGEM AVATAR FIREBASE*/
// Cria uma referência à imagem no armazenamento do Firebase
var storage = firebase.storage();
var storageRef = storage.ref();
var imagemRef = storageRef.child('/CaminhoFirebaseAqui');

// Obter a URL de download da imagem
imagemRef.getDownloadURL().then(function (url) {
    // Defina a URL de download como o atributo src da imagem
    var imagem = document.getElementById('ImageAvatar');
    imagem.src = url;
}).catch(function (error) {
    // Se ocorrer um erro ao obter a URL de download, exiba uma mensagem de erro
    console.log('Erro ao obter a URL da imagem: ' + error);
});


/*AÇÃO DO BOTÃO NOVO REGISTRO */
btnNovo.addEventListener('click', () => {
    selecionarBanco.style.display = 'flex'
})

/*SELECIONAR O CARTÃO DESEJADO*/
function selecionarCartao() {

    const valor = formBanco.options[formBanco.selectedIndex].value

    switch (valor) {
        case "0":
            cartaoBanco.style.visibility = 'hidden'
            break
        case "1":
            cartaoBanco.style.removeProperty("visibility");
            selecionarUser.style.display = 'flex'
            cartaoBanco.style.background = '#804e9f'
            cartaoBanco.innerHTML = `<img class="LogoBanco" src="/img/nubank.svg" width="80" height="40" alt="logo Nubank">
                                    <img class="logoBandeira" src="/img/MastercardLogo.svg" width="80" height="40"
                                    alt="logo Mastercard-Logo">
                                    <p id=InserirNomeCartao></p>`
            break
        case "2":
            cartaoBanco.style.removeProperty("visibility");
            selecionarUser.style.display = 'flex'
            cartaoBanco.style.background = "#ee8c0f"
            cartaoBanco.innerHTML = `<img class="LogoBanco" src="/img/Logo-banco-inter.svg" width="80" height="40" alt="logo Nubank">
                                        <img class="logoBandeira" src="/img/MastercardLogo.svg" width="80" height="40"
                                        alt="logo Mastercard-Logo">
                                        <p id=InserirNomeCartao></p>`

            break
        case "3":
            cartaoBanco.style.removeProperty("visibility");
            selecionarUser.style.display = 'flex'
            cartaoBanco.style.background = "#09245d"
            cartaoBanco.innerHTML = `<img class="LogoBanco" src="/img/LogotipoDigio.svg" width="80" height="40" alt="logo Nubank">
                                        <img class="logoBandeira" src="/img/VisaLogo.svg" width="80" height="40"
                                        alt="logo Mastercard-Logo">
                                        <p id=InserirNomeCartao></p>`

            break
        case "4":
            cartaoBanco.style.removeProperty("visibility");
            selecionarUser.style.display = 'flex'
            cartaoBanco.style.background = "#f5d72f"
            cartaoBanco.innerHTML = `<img class="LogoBanco" src="/img/will-bank.svg" width="80" height="40" alt="logo Nubank">
                                    <img class="logoBandeira" src="/img/MastercardLogo.svg" width="80" height="40"
                                    alt="logo Mastercard-Logo">
                                    <p id=InserirNomeCartao style="color:#212121"></p>`
            break
    }
}

/*MOSTRA OS USUARIOS*/
function MostraUsuarios() {
    const valor = formUsuario.options[formUsuario.selectedIndex].value
    const UserNome = formUsuario.options[formUsuario.selectedIndex].text
    const NomeCartao = document.querySelector('#InserirNomeCartao')
    if (valor != 0) {
        InsereDados.style.display = 'flex'
        NomeCartao.innerHTML = UserNome
    }
}

/*tooltips INFO SAIR DA CONTA */
window.addEventListener('DOMContentLoaded', function () {
    tooltips.forEach(function (tooltip) {
        new bootstrap.Tooltip(tooltip);
    });
});


/*INSERIR OS DADOS NO FIREBASE */
function InserirDados() {
    const banco = formBanco.options[formBanco.selectedIndex].text
    const usuario = formUsuario.options[formUsuario.selectedIndex].text
    const mes = formMeses.options[formMeses.selectedIndex].text
    const descricao = document.querySelector('#txtDescricao')
    const vlDaCompra = document.querySelector('#vlCompra')

    const dados = {
        descricao: descricao.value,
        valor: vlDaCompra.value
    }

    /*INICIA A VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS */
    const cartaoBco = formBanco.options[formBanco.selectedIndex].value
    const user = formUsuario.options[formUsuario.selectedIndex].value
    const mesFatura = formMeses.options[formMeses.selectedIndex].value
    const txtDescricao = document.querySelector('#txtDescricao').value
    const txtVlDaCompra = document.querySelector('#vlCompra').value
    modal.showModal()
    if (cartaoBco == "0" || user == "0" || mesFatura == "0" || txtDescricao.length == 0 || txtVlDaCompra.length == 0) {
        audioError.play()
        toastMensagemError.innerHTML = `<div class="toast-header">
                <img src="/img/LoginError.png" class="rounded me-2" alt="Error" width="50" height="50">
                <strong class="me-auto">Mensagem interna</strong>
                <small>Erro no lançamento</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                <span style="color:white">Ops! houve um erro ao realizar o lançamento, por favor verifique os dados e tente novamente😞.</span>
                </div>`
        /*TOAST DE ERROR CAMPOS EM BRANCO */
        var myToast = new bootstrap.Toast(toastMensagemError)
        myToast.show()
        modal.close()
    } else {
        /*GRAVAÇÃO COMEÇA AQUI*/
        firebase.database().ref('Contas').child(banco).child(mes).child(usuario).push(dados).then(() => {
            // gravação bem-sucedida
            audioSucess.play()
            toastMensagemSucess.innerHTML = `<div class="toast-header">
            <img src="/img/LoginSucess.png" class="rounded me-2" alt="Error" width="50" height="50">
            <strong class="me-auto">Mensagem interna</strong>
            <small>Sucesso na gravação</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            <span style="color:white">Olá!, a gravação do seu registro foi concluído com sucesso 😊.</span>
            </div>`

            /*TOAST SUCESSO NA GRAVAÇÃO */
            var myToast = new bootstrap.Toast(toastMensagemSucess)
            myToast.show()
            modal.close()
            const txtDescricao = document.querySelector('#txtDescricao')
            const txtVlDaCompra = document.querySelector('#vlCompra')

            txtDescricao.value = ''
            txtVlDaCompra.value = ''
        })
            .catch((error) => {
                audioError.play()
                toastMensagemError.innerHTML = `<div class="toast-header">
                    <img src="/img/LoginError.png" class="rounded me-2" alt="Error" width="50" height="50">
                    <strong class="me-auto">Mensagem interna</strong>
                    <small>ERROR</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                    <span style="color:white">Ops! houve algum erro na gravação com o Realtime Database 😞.</span>
                    </div>`

                /*TOAST DE ERROR NO BANCO DE DADOS */
                var myToast = new bootstrap.Toast(toastMensagemError)
                myToast.show()
                console.error("Erro ao gravar no Realtime Database: ", error);
            });
    }

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
