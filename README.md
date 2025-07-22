# 🚀 P3 - Landing Page

Bem-vindo ao repositório da P3 Landing Page! Este projeto foi desenvolvido como parte de um exercício prático, focando na criação de uma página de destino moderna, responsiva e otimizada para a experiência do usuário.

---

## 💡 Sobre o Projeto

Esta landing page apresenta uma interface limpa e intuitiva, destacando os serviços e produtos de uma empresa fictícia. O objetivo principal é capturar a atenção do visitante e direcioná-lo a uma ação específica, como entrar em contato.

---

## ✨ Funcionalidades Principais

* **Design Responsivo:** Layout adaptável para desktop, tablets e dispositivos móveis, garantindo uma ótima experiência em qualquer tela.
* **Animações Suaves:** Efeitos de fade-in em elementos e seções para uma navegação visualmente agradável.
* **Seção de Serviços:** Apresentação clara dos serviços oferecidos, com cards interativos.
* **Seção de Produtos:** Exibição dinâmica de produtos categorizados, com cards informativos.
* **Mapa Interativo:** Localização da empresa integrada via Google Maps para fácil acesso.
* **Formulário de Contato:** Funcional para que os visitantes possam enviar mensagens diretamente.
* **Otimização:** Código limpo e com foco em boas práticas de desenvolvimento e acessibilidade.

---

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface do usuário.
* **Styled Components:** Para estilização baseada em componentes, garantindo flexibilidade e manutenção.
* **@react-google-maps/api:** Componentes React para integração com o Google Maps.

---

## ⚙️ Como Funciona

A aplicação é um Single Page Application (SPA) construída com React. Os dados dos produtos e serviços são mockados (simulados) localmente para demonstração. As interações do usuário, como a seleção de categorias de produtos ou o preenchimento do formulário, são gerenciadas pelo estado do React.

---

## 🚀 Como Rodar o Projeto Localmente

Para clonar e executar este projeto em sua máquina, siga os passos abaixo:

### Pré-requisitos

* Node.js (versão 14 ou superior recomendada)
* npm (gerenciador de pacotes do Node.js) ou Yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vprribeiro/p3-landing-page.git](https://github.com/vprribeiro/p3-landing-page.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd p3-landing-page
    ```
3.  **Instale as dependências (node_modules):**
    ```bash
    npm install
    # ou, se preferir Yarn:
    # yarn install
    ```
4.  **Configuração da Chave de API do Google Maps:**
    Este projeto utiliza a API do Google Maps. Por motivos de segurança, a chave da API **não é incluída no código-fonte** versionado pelo Git. Você precisará configurar a sua própria chave:
    * Crie um arquivo chamado `.env` na **raiz do projeto** (no mesmo nível de `package.json`).
    * No arquivo `.env`, adicione a seguinte linha, substituindo `SUA_CHAVE_DO_Maps` pela sua chave de API do Google Maps:
        ```
        REACT_APP_Maps_API_KEY=SUA_CHAVE_DO_Maps
        ```
    * *(Opcional: Para evitar problemas futuros, certifique-se de que o `.env` está na sua lista do `.gitignore`.)*

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento e ver a landing page em ação:

```bash
npm start
# ou
# yarn start
```

O projeto será aberto automaticamente no seu navegador. Caso não abra, acesse:
http://localhost:3000

---

## 🧑‍💻 Autor

Este projeto foi desenvolvido por:

**Vitor Ribeiro**
* [LinkedIn](https://www.linkedin.com/in/ribeiro-vitor/)