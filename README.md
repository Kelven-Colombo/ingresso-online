# 🎟️ Ingresso Online

> **Status:** Projeto desenvolvido como desafio pessoal a partir de um exercício do curso da Alura.
> 🔗 **[Acessar a demo do projeto ▶️](https://kelven-colombo.github.io/ingresso-online/)**

## ℹ️ Sobre

Começou como um exercício de lógica de programação da **Alura** — mas em vez de seguir o código junto com o curso, decidi fazer a lógica do zero, usando só o layout como referência. O que era pra ser um exercício guiado virou um projeto próprio.

### Objetivo

Simular um sistema simples de compra de ingressos online, com controle de estoque em tempo real.

---

## 🔧 O que foi implementado

- **Lista de ingressos como fonte de dados:** os tipos de ingresso vivem num array de objetos no JS. Os `<option>` do select e a tabela de estoque são populados dinamicamente a partir dele — adicionar um novo tipo é só incluir um objeto no array.
- **Separação de responsabilidades:** cada função tem um papel específico: obter tipo, obter quantidade, verificar estoque, atualizar, renderizar. Nada de função fazendo tudo ao mesmo tempo.
- **Controle de estoque em tempo real:** a quantidade disponível é atualizada a cada compra, com validações de estoque esgotado e quantidade insuficiente.
- **Persistência com localStorage:** o estado do estoque é salvo automaticamente no navegador. Fechar e reabrir a página mantém os dados.
- **Renderização dinâmica:** a lista de estoque é limpa e recriada do zero a cada alteração, sempre refletindo o estado atual do array.
- **Validações de input:** quantidade vazia, zero, negativa e acima do limite de 10 unidades por compra são tratadas com mensagens específicas.
- **Opção desabilitada ao esgotar:** quando um tipo de ingresso zera o estoque, o `<option>` correspondente é desabilitado automaticamente.

---

## Tecnologias

<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

---

## 👤 Autor

<div align="center">
   <a href="https://github.com/Kelven-Colombo">
    <img src="https://github.com/Kelven-Colombo.png" alt="Kelven Colombo" width="150">
  </a>
  <br><br>
  <a href="https://github.com/Kelven-Colombo">
    <img src="https://img.shields.io/badge/Autor-Kelven%20Colombo-blue?style=for-the-badge&logo=github">
  </a>
</div>
