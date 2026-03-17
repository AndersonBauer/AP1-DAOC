# 🛍️ Store App

Uma aplicação web simples de e-commerce feita com **JavaScript puro (Vanilla JS)**, consumindo uma API externa de produtos.

O projeto permite visualizar produtos, favoritar itens e aplicar diversos filtros de forma dinâmica — tudo sem uso de frameworks.

---

## 🚀 Funcionalidades

### 🔍 Busca

* Filtra produtos pelo nome em tempo real.

### 💰 Filtro por preço

* Define valor mínimo e máximo.

### ⭐ Filtro por avaliação

* Filtra produtos por nota (ex: 4 estrelas ou mais).

### 🏷️ Filtro por categoria

* Categorias carregadas dinamicamente da API.

### ❤️ Favoritos

* Adiciona/remove produtos dos favoritos.
* Persistência usando **localStorage**.

### 🌙 Tema Dark/Light

* Alternância entre tema claro e escuro.
* Preferência salva automaticamente no navegador.

### 📱 Responsividade

* Layout adaptado para:

  * Desktop
  * Tablet
  * Mobile

---

## 🧱 Tecnologias utilizadas

* HTML5
* CSS3 (Flexbox + Grid)
* JavaScript (ES Modules)
* LocalStorage
* API externa:

  * https://fakestoreapi.com/

---

## 📁 Estrutura do Projeto

```
📦 projeto
 ┣ 📂 js
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 card.js
 ┃ ┃ ┗ 📜 header.js
 ┃ ┣ 📜 api.js
 ┃ ┣ 📜 storage.js
 ┃ ┗ 📜 app.js
 ┣ 📜 index.html
 ┗ 📜 style.css
```

---

## ⚙️ Como funciona

### 🔹 1. Consumo da API

Os produtos são buscados de:

```js
https://fakestoreapi.com/products
```

---

### 🔹 2. Renderização

* Os produtos são renderizados dinamicamente usando JS.
* Cada item vira um **card**.

---

### 🔹 3. Sistema de filtros

Os filtros funcionam em conjunto:

* Nome
* Preço
* Avaliação
* Categoria

Tudo é controlado pela função:

```js
applyFilters()
```

---

### 🔹 4. Favoritos

* Armazenados no `localStorage`
* Estrutura:

```js
[
  { id: 1, title: "...", price: ... }
]
```

---

### 🔹 5. Tema Dark Mode

* Classe aplicada no `<body>`:

```css
body.dark
```

* Salvo no navegador:

```js
localStorage.setItem('theme', 'dark')
```

---

## ▶️ Como rodar o projeto

1. Baixe ou clone o repositório
2. Abra o `index.html` no navegador

ou use uma extensão como:

* Live Server (VS Code)

---

## 💡 Melhorias futuras

* 🔽 Ordenação por preço (crescente/decrescente)
* ⭐ Sistema de estrelas visual (★★★★★)
* 🛒 Carrinho de compras
* 🔐 Login de usuário
* 🌍 Tradução de categorias

---

## 📸 Preview

(Adicione aqui prints do projeto se quiser)

---

## 🧑‍💻 Autor

Feito por você 😎
(com uma ajudinha do ChatGPT)

---

## 📄 Licença

Projeto livre para estudos.
