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

<br>

# Links

https://console.firebase.google.com/

# Referência

[Carreira Desenvolvedor Frontend Angular - Balta.io](https://balta.io/carreiras/desenvolvedor-frontend-angular)
