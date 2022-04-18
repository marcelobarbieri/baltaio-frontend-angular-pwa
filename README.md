# Criando PWAs com Angular 8, Ionic 4 e Firebase

## Tópicos

> As aulas foram organizadas dentro dos _commits_

<details><summary>Apresentação</summary>

<br>

</details>

<details><summary>Setup Firebase</summary>

<br>

https://console.firebase.google.com/

## Adicionar projeto

- Adicionar projeto **baltagram**
- Ativar o Google Analytics neste projeto? **Não**
- Criar projeto

## Web

- Registrar app **baltagram**
- Não configurar o **Firebase Hosting**
- Registrar app

```html
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB97lNxa_8W6Ji4g6s_j8amt82WJQ5W6zw",
    authDomain: "baltagram-8998a.firebaseapp.com",
    projectId: "baltagram-8998a",
    storageBucket: "baltagram-8998a.appspot.com",
    messagingSenderId: "1032944191438",
    appId: "1:1032944191438:web:cd60510195eb9471980d9f",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
```

## Autenticação

Adicionar fornecedores

- Provedor nativo: E-mail/ senha > Ativar
- Outros provedores: Google > Ativar

## Database

Firestore Database

- Criar banco de dados
- Iniciar no modo teste

```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

## Storage

```json
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```

- Publicar

</details>

<details><summary>Setup AngularFire</summary>

<br>

```ps
ionic start baltagram blank

npm install firebase @angular/fire --save
```

</details>

<details><summary>Models</summary>

<br>

</details>

<details><summary>Tirando Foto: Parte 1</summary>

<br>

```ps
ionic generate page pages/take-photo

ionic serve --lab
```

</details>

<details><summary>Tirando Foto: Parte 2</summary>

<br>

</details>

<details><summary>Tirando Foto: Parte 3</summary>

<br>

</details>

<details><summary>Iniciando a Página de Post</summary>

<br>

```ps
ionic generate page pages/post
```

</details>

<details><summary>Utilizando a Geolocalização</summary>

<br>

</details>

<details><summary>Descartando a Publicação</summary>

<br>

</details>

<details><summary>Persistindo Dados no Firebase</summary>

<br>

Após publicar verificar a coleção e o documento criado no console do Firebase

</details>

<details><summary>Upload de Imagem</summary>

<br>

Após publicar verificar a coleção e o documento persistidos no banco de dados, e a imagem carregada no Storage, a partir do console do Firebase

</details>

<details><summary>Exibindo a Localização no Mapa</summary>

<br>

```ps
ionic generate page pages/map
```

https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key

Criar uma credencial
Habilitar **Maps Embed API**

</details>

<details><summary>Exibindo os Posts</summary>

<br>

- Incluir um post
- Adicionar um documento a partir do Firebase

```
description: "Teste"
image: https://via.placeholder.com/500
location: <vazio>
```

</details>

<details><summary>Criando um usuário</summary>

<br>

```ps
ionic generate page pages/login
ionic generate page pages/signup
```

Verificar o usuário criado na autenticação do Firebase após o cadastro com o provedor e-mail.

</details>

<details><summary>Autenticando via E-mail e Senha</summary>

<br>

</details>

<br>

# Links

https://console.firebase.google.com/

# Referência

[Carreira Desenvolvedor Frontend Angular - Balta.io](https://balta.io/carreiras/desenvolvedor-frontend-angular)
