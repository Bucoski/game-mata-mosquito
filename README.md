# Mata Mosquito Game

Este é um jogo simples de clicar em mosquitos que aparecem aleatoriamente na tela. O objetivo do jogo é clicar nos mosquitos antes que o tempo acabe, sem perder vidas.

## Como Rodar o Projeto

### Pré-requisitos

- **Navegador Web**: O jogo foi desenvolvido para ser executado em navegadores modernos como Chrome, Firefox, Edge, etc.
- **Servidor Web (opcional)**: Para rodar o projeto localmente de forma mais fluida, é recomendado um servidor local (pode ser feito com ferramentas como *Live Server*, *http-server*, entre outros).

### Passos para Rodar o Projeto

1. **Baixe ou Clone o Repositório**

   Primeiramente, você precisa obter os arquivos do projeto. Existem duas maneiras de fazer isso:

   - **Clonar o Repositório** (caso tenha o Git instalado):

     ```bash
     git clone https://github.com/SEU_USUARIO/mata-mosquito.git
     cd mata-mosquito
     ```

   - **Baixar os Arquivos Manualmente**:

     1. Vá até a página do repositório no GitHub.
     2. Clique em "Code" e depois em "Download ZIP".
     3. Extraia o arquivo ZIP em um diretório de sua preferência.

2. **Abra o Projeto em Seu Navegador**

   - Se você tiver um editor de código como o *VS Code*, abra a pasta do projeto.
   - Abra o arquivo `index.html` diretamente em seu navegador ou use uma extensão como *Live Server* para rodar o projeto localmente.
   
   Caso queira rodar o projeto em um servidor local, siga as instruções de instalação de ferramentas como *http-server* ou *Live Server*.

   **Exemplo utilizando http-server**:

   Se você tiver o Node.js instalado, pode rodar um servidor simples localmente:

   1. Instale o `http-server` globalmente (caso ainda não tenha instalado):

      ```bash
      npm install -g http-server
      ```

   2. No terminal, dentro da pasta do projeto, execute o seguinte comando:

      ```bash
      http-server
      ```

   3. O servidor estará disponível em [http://localhost:8080](http://localhost:8080). Abra seu navegador e acesse esse endereço.

3. **Escolha o Nível de Dificuldade**

   Ao abrir a página principal, você verá uma opção para escolher o nível de dificuldade:
   - Normal
   - Difícil
   - "Num compensa"

   Escolha o nível desejado e clique no botão "Iniciar Jogo" para começar!

### Durante o Jogo

- O objetivo é **clicar nos mosquitos** que aparecem aleatoriamente na tela antes que o tempo acabe.
- Você começa com **3 vidas** e, a cada erro (mosquito não clicado), perde uma vida. O jogo termina quando você perder todas as vidas.
- O **tempo de jogo** diminui conforme o jogo avança.
- Ao final do jogo, você será redirecionado para uma página de **vitória** ou **fim de jogo**, dependendo do seu desempenho.

## Arquivos Importantes

- **`index.html`**: Página inicial onde você escolhe o nível de dificuldade e inicia o jogo.
- **`app.html`**: Página principal do jogo, onde o jogo acontece e você interage com os mosquitos.
- **`jogo.js`**: Arquivo JavaScript que contém toda a lógica do jogo.
- **`style.css`**: Arquivo de estilos para o design e aparência do jogo.

## Personalização

Se você quiser modificar o jogo, pode:

- **Alterar a imagem de fundo**: Modifique o arquivo `background-image-AI.png` na pasta `imagens/`.
- **Alterar as imagens dos mosquitos**: Substitua as imagens em `imagens/mosquito.png` por novas imagens de sua preferência.
- **Ajustar o tempo de jogo e as vidas**: No código JavaScript (arquivo `jogo.js`), altere as variáveis de tempo e número de vidas para personalizar a dificuldade.

## Contribuição

Se você quiser contribuir para o projeto, fique à vontade para:

1. Fazer um **fork** do repositório.
2. Criar uma nova branch.
3. Abrir um **pull request** com suas alterações.

Se tiver sugestões ou melhorias, não hesite em **abrir uma issue**!
