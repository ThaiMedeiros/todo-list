<p align="center">
  <img src="https://i.postimg.cc/6qpKgbJh/daily-task.png" alt="Ecoleta" title="Ecoleta" style="vertical-align:top; margin:6px 4px;" width="10%">
</p><br />

# Todo List (Lista de Tarefas)

- Uma aplicação web para gerenciamento de tarefas.

<br />

<p align="center">
  <a href="#features"> :newspaper: Features</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#requisitos">:pushpin: Pré-requisitos</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#tecnologias">:computer: Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rodando"> :arrow_forward: Rodando o Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#contribuir"> :jigsaw: Como Contribuir</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#licenca"> :memo: Licença</a>
</p>

<br />

<div id="features" align="center">
    <h2> :newspaper: Features</h2>
</div>

- [x] Usuários:
  - [x] Registrar;
  - [x] Login;
- [x] Tarefas:
  - [x] Cadastrar;
  - [x] Marcar como Concluída;
  - [x] Editar;
  - [x] Listar;
  - [x] Deletar;
- [x] Sistema:
  - [x] Alterar Tema (Modo Light ou Dark);

<br />

<div id="requisitos" align="center">
    <h2> :pushpin: Pré-requisitos</h2>
</div>

- [Firebase](https://firebase.google.com/?hl=pt)
- [Git](https://git-scm.com)
- [NodeJs](https://nodejs.org/)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [ReactJs](https://reactjs.org/)
- [VSCode](https://code.visualstudio.com/)

<br />

<div id="tecnologias" align="center">
    <h2> :computer: Tecnologias</h2>
</div>

<div id="#" align="center">
  <h4>
    Tecnologias utilizadas
  </h4>
</div>

- ReactJS
- Firebase

<br />

<div id="rodando" align="center">
   <h2> :arrow_forward: Rodando o Projeto</h2>
</div>

- Crie previamente um projeto no Firebase Console:
  1. Entre no Firebase Console.
  2. Clique em adicionar projeto.
  3. Dê um nome para o projeto.
  4. Ele irá perguntar: `Google Analytics para seu projeto do Firebase` neste caso deixe ativo e selecione uma conta (caso já tenha algum outro projeto, se não ele não apresenta essa tela).
  5. Prossiga e crie o projeto, após aguarde ele finalizar e clique em continuar.
  6. Procure a opção *web* que é representada pelo símbolo: *<>*.
  7. Ele vai pedir para **Registrar app** (dê um nome e clique em **Registrar App**) - não precisa configurar o Firebase Hosting.
  8. Em seguida ele vai mostrar como instalar o firebase com o npm e exibir o código de configuração da aplicação: **Adicionar o SDK do Firebase**.
    - Aqui você pode copiar os valores das chaves contidas em e cole nas respectivas chaves:
      - `apiKey >> REACT_APP_FIREBASE_API_KEY`
      - `authDomain >> REACT_APP_FIREBASE_AUTH_DOMAIN`
      - `projectId >> REACT_APP_FIREBASE_PROJECT_ID`
      - `storageBucket >> REACT_APP_FIREBASE_STORAGE_BUCKET`
      - `messagingSenderId >> REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
      - `appId >> REACT_APP_FIREBASE_APP_ID`
      - `measurementId >> REACT_APP_FIREBASE_MEASUREMENT_ID`
  9. Depois Clique em: **Continuar no console**.
  10. Já no console, na lateral esquerda procure por: Criação > Authentication.
  11. Clique em **Vamos começar**.
  12. Em **Método de Login** , **Provedores nativos** selecione **E-mail/senha**.
  13. Após, clique em **Ativar** e **salvar** (para ativar a autenticação via email e senha da aplicação).

```bash
# clonando o projeto na sua maquina
$ git clone https://github.com/ThaiMedeiros/todo-list.git

# entre na pasta do projeto
$ cd todo-list

# 1. copie o arquivo: >> .env-example << cole no mesmo diretório em que se encontra
# 2. remova a o sufixo >> -example <<
# 3. Então, coloque as credenciais de acesso ao seu projeto do firebase, no agora arquivo >> .env <<

# execute o comando abaixo para instalar as dependências do projeto
$ npm install

# para inicializar, execute no terminal o comando:
$ npm start

# poderá acessá-lo através do endereço:
$ `http://localhost:3000`

# Após isso, poderá se registrar com um email e senha, após o registro concluído, realize seu login e começe a gerenciar suas tarefas.
```

<br />

<div id="contribuir" align="center">
    <h2> :jigsaw: Como Contribuir</h2>
</div>

1. Faça um fork desse projeto.
2. Crie uma nova branch para trabalhar: `git checkout -b my-feature`
3. Faça commit da sua feature: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
5. Solicite uma Pull Request para o diretório original.

<br />

<div id="licenca" align="center">
    <h2> :memo: Licença</h2>
</div>

Esse projeto está sob a licença :balance_scale: MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por: :copyright: Thaiza Medeiros :woman_technologist: :purple_heart:
