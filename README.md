# Painel de contas a pagar 💸
<h2>⭐ Projeto</h2>
<p>Este projeto foi desenvolvimento com o propósito de manter e armazenar dados financeiros de compras realizadas em cartões de crédito, organizados e de uma forma bem intuitiva ao usuário.</p>
<h2>⚙️ Funcionamento</h2>
<p>O Painel é constituinte por 3 páginas, onde o usuário tem uma maior experiencia e didática densenvolvida.</p>
<li>Lançar contas</li>
<p>Aqui o usuário poderá escolher qual cartão de crédito deseja inserir a conta, em seguida escolhe qual o usuário do cartão de crédito, escolhe o mês e por fim a desrição da compra e valor.</p>
<br>
<li>Contas lançadas</li>
<p>Nesta página o usuário ver se forma simples e objetiva, os lançamentos que foram lançados anteriormente.</p>
<br>
<li>Resumo</li>
<p>Um resumo, onde o usuário poderá ver um total por cartão de crédito, tendo como filtro o mês e o usuário do cartão.</p>
<h2>⚡Dependências</h2>
<p>Este painel tem como integração o <strong>FIREBASE</strong>, para realização de <strong>(LOGIN) usando o Firebase Auth</strong>, <strong>(CONSULTAS/INSERÇÕES) usando o Firebase Realtime Database</strong>, portanto segue abaixo um passo a passo para o funcionamento do painel seja realizado.</p>
<li>1° Criar um projeto do Firebase e registrar o app</li>
<li>2° Instalar o SDK e inicializar o Firebase</li>
<p><strong>Obs</strong> dentro dos arquivos .JS existe um arquivo chamado (firebaseConnect.js), aqui você poderá jogar o seu SDK do Firebase.</p>
const firebaseConfig = {
<br>
 <p>   //...TODO sua configuração do projeto aqui</p>
};
<br>
//depois inicialize
<br>
const app = initializeApp(firebaseConfig);
<br>
<p>Essas configurações inicias são de integrar o painel ao seu Firebase</p>
<br>
<p>No Firebase Auth, você terá que criar um e-mail e um senha para poder realizar login no painel.</p>
<br>
<p>Um outro fator também é imagem(avatar) na parte superior direita do painel, onde a imagem é circular, a mesma também vem do Firebase Storage, então você poderá subir uma imagem qualquer para o firebase com essa descricao 'ImagePerfill.jpeg' ou uma qualquer,mas pra isso você precisa editar no arquivo javascript.</p>
