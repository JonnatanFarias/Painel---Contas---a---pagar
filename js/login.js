/*VARIAVEIS GLOBAIS */
var inputEmail = document.getElementById('floatingInput')
var inputSenha = document.getElementById('floatingPassword')
var btnEntrar = document.getElementById('btnEntrar')
var form = document.getElementById('some-form')
var audioError = document.getElementById("audioLoginError")
var audioSucess = document.getElementById("audioLoginSucess")
var toastMensagemError = document.querySelector('#liveToast')
var toastMensagemSucess = document.querySelector('#liveToastSucess')

var modal = document.querySelector('dialog')

/*AÇÃO DO BOTÃO PARA ENTRAR */
btnEntrar.addEventListener('click', () => {

    if (inputEmail.value.length == 0 || inputSenha.value.length == 0) {
        audioError.play()
        toastMensagemError.innerHTML = `<div class="toast-header">
            <img src="./img/LoginError.png" class="rounded me-2" alt="Error" width="50" height="50">
            <strong class="me-auto">Mensagem interna</strong>
            <small>Campos em branco</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            <span style="color:white">Ops!, existe campos em branco, por favor preencha-os para realizar o login 😞.</span>
            </div>`

        /*TOAST DE ERROR CAMPOS EM BRANCO */
        var myToast = new bootstrap.Toast(toastMensagemError)
        myToast.show()
    } else {
        /*CHAMA O MODAL ENTRANDO...*/
        modal.showModal()
        /*FAZ O LOGIN */
        firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
            .then((userCredential) => {
                // Login bem-sucedido
                audioSucess.play()
                toastMensagemSucess.innerHTML = `<div class="toast-header">
                <img src="./img/LoginSucess.png" class="rounded me-2" alt="Error" width="50" height="50">
                <strong class="me-auto">Mensagem interna</strong>
                <small>Sucesso no login</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                <span style="color:white">Olá!, Seu login foi realizado com sucesso 😊.</span>
                </div>`

                /*FECHA O MODAL*/
                modal.close()
                /*TOAST DE ERROR DE LOGIN */
                var myToast = new bootstrap.Toast(toastMensagemSucess)
                myToast.show()

                var displayForm = document.querySelector('.form-signin')
                displayForm.style.display = 'none'
                var btnDarkMode = document.querySelector('.btnDarkMode')
                btnDarkMode.style.display = 'none'

                var spinner = document.querySelector('.spiner')

                spinner.innerHTML = `<div class="spinner-grow text-success" style="width: 5rem; height: 5rem;" role="status">
                <span class="visually-hidden">Carregando...</span>
                </div>`


                setTimeout(() => {
                    var url = "./pages/painel.html"
                    var novaUrl = url.replace('.html','')
                    window.location.href = novaUrl
                }, 3000)
            })
            .catch((error) => {
                // Erro no login
                audioError.play()
                toastMensagemError.innerHTML = `<div class="toast-header">
                <img src="./img/LoginError.png" class="rounded me-2" alt="Error" width="50" height="50">
                <strong class="me-auto">Mensagem interna</strong>
                <small>Error no login</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                <span style="color:white">Ops!, houve um erro ao realizar o login, por favor verifique as credenciais e tente novamente 😞.</span>
                </div>`

                /*FECHA O MODAL*/
                modal.close()
                /*TOAST DE SUCESSO NO LOGIN */
                var myToast = new bootstrap.Toast(toastMensagemError)
                myToast.show()
            });
        /*LIMPA OS INPUTS */
        inputEmail.value = ""
        inputSenha.value = ""
    }
})
/* TIRA O REFRESH DO FORM*/
form.addEventListener('submit', e => {
    e.preventDefault()
})

/*DARK MODE */
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var getClass = element.getAttribute("class")

    if (getClass == "text-center dark-mode") {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.remove('fa-moon')
        iconSol.classList.add('fa-sun')

    } else {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.add('fa-moon')
        iconSol.classList.remove('fa-sun')

    }
}
/*tooltips DO MODO ESCURO */
window.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach(function (tooltip) {
        new bootstrap.Tooltip(tooltip);
    });
});

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