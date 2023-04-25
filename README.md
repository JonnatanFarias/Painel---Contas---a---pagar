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
<h3>Essas configurações inicias são de integrar o painel ao seu Firebase.</h3>
<p>No Firebase Auth, você terá que criar um e-mail e um senha para poder realizar login no painel. Um outro fator também é imagem(avatar) na parte superior direita do painel, onde a imagem é circular, a mesma também vem do Firebase Storage, então você poderá subir uma imagem qualquer para o firebase com essa descricao 'ImagePerfill.jpeg' ou uma qualquer,mas pra isso você precisa editar no arquivo javascript.</p>
<h2>💻 Tecnologias utilizadas</h2>
<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3" data-canonical-src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML5" data-canonical-src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"><img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width: 100%;"></a>
 <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/5eb51cb55e0d138aec3f0a4c2bc9912302385bbb30abad337d2353c0139c19cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46697265626173652d4632394430433f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/5eb51cb55e0d138aec3f0a4c2bc9912302385bbb30abad337d2353c0139c19cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46697265626173652d4632394430433f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365266c6f676f436f6c6f723d7768697465" alt="Firebase" ></a>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/a0484e6383e852e622da1e934b7724921ab9b69d69246d90f899424b01f6deb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030373864372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/a0484e6383e852e622da1e934b7724921ab9b69d69246d90f899424b01f6deb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030373864372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465" alt="Visual Studio Code" data-canonical-src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=white" style="max-width: 100%;"></a>
</p>
<h2>🔥 Autor</h2>
<span>Desenvolvido por <a href="https://www.linkedin.com/in/jonnatan-farias/">JonnatanFarias</a></span>
