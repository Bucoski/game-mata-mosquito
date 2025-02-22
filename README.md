Mata Mosquito Game

Este é um jogo simples de clicar em mosquitos que aparecem aleatoriamente na tela. O objetivo do jogo é clicar nos mosquitos antes que o tempo acabe, sem perder vidas.

Como rodar o projeto
Pré-requisitos
Navegador Web: O jogo foi desenvolvido para ser executado em navegadores modernos como Chrome, Firefox, Edge, etc.
Servidor Web (opcional): Para rodar o projeto localmente de forma mais fluida, é recomendado um servidor local (pode ser feito com ferramentas como Live Server, http-server, entre outros).
Passos para rodar o projeto
Baixe ou clone o repositório

Primeiro, você precisa obter os arquivos do projeto. Você pode fazer isso de duas maneiras:

a. Clonar o repositório (caso tenha o Git instalado):

bash
Copiar
git clone https://github.com/SEU_USUARIO/mata-mosquito.git
cd mata-mosquito
b. Baixar os arquivos manualmente:

Vá até a página do repositório no GitHub.
Clique em "Code" e depois "Download ZIP".
Extraia o arquivo ZIP em um diretório de sua preferência.
Abra o projeto em seu navegador

Se você tiver um editor de código como o VS Code, abra a pasta do projeto.
Abra o arquivo index.html diretamente em seu navegador, ou use uma extensão como Live Server para rodar o projeto localmente.
Caso queira rodar o projeto em um servidor local, siga as instruções de instalação de ferramentas como http-server ou Live Server.

Exemplo utilizando http-server:

Se você tiver o Node.js instalado, pode rodar um servidor simples localmente:

Instale o http-server globalmente (caso não tenha instalado):
bash
Copiar
npm install -g http-server
No terminal, dentro da pasta do projeto, execute:
bash
Copiar
http-server
O servidor estará disponível em http://localhost:8080. Abra seu navegador e acesse esse endereço.
Escolha o nível de dificuldade

Ao abrir a página principal, você verá uma opção para escolher o nível de dificuldade (Normal, Difícil, ou "Num compensa").

Escolha um nível.
Clique no botão "Iniciar Jogo" para começar a jogar!
Durante o jogo

O objetivo é clicar nos mosquitos que aparecem aleatoriamente na tela antes que o tempo acabe.
Você começa com 3 vidas, e cada vez que errar, uma vida é perdida. Se perder todas as vidas, o jogo termina.
O tempo de jogo vai diminuindo conforme você joga. No final, você será redirecionado para uma página de vitória ou fim de jogo.
Arquivos importantes
index.html: Página inicial onde você escolhe o nível de dificuldade e inicia o jogo.
app.html: Página principal do jogo, onde o jogo acontece e você interage com os mosquitos.
jogo.js: Arquivo JavaScript com a lógica do jogo.
style.css: Arquivo de estilos para o design do jogo.
Personalização
Se você quiser modificar o jogo, você pode:

Alterar a imagem de fundo: Modifique o arquivo background-image-AI.png na pasta imagens/.
Alterar as imagens dos mosquitos: Substitua as imagens em imagens/mosquito.png por imagens de sua preferência.
Ajustar o tempo de jogo e as vidas: No código JavaScript (jogo.js), altere as variáveis de tempo e número de vidas para personalizar a dificuldade.
Contribuição
Se você quiser contribuir para o projeto, fique à vontade para fazer um fork, criar uma nova branch e abrir um pull request. Se você tiver sugestões ou melhorias, não hesite em abrir uma issue!