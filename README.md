# Projeto: Catálogo de Produtos com Next.js & Bootstrap

**Objetivo:** Desenvolver um catálogo funcional consumindo dados reais da API [DummyJSON](https://dummyjson.com/). O foco é praticar o roteamento do Next.js e a estilização responsiva com Bootstrap.

## 🚀 Dia 1: Estrutura e Listagem de Produtos

1. **Configuração do Ambiente:**
    - Iniciar um novo projeto Next.js.
    - Instalar e configurar o **Bootstrap** (importar o CSS no ponto de entrada da aplicação).
    - Criar uma estrutura de Layout base (Navbar e Footer) que se repita em todas as páginas.
2. **Desenvolvimento da Home:**
    - Implementar a função de data fetching do Next.js para buscar a lista de produtos da API.
    - Exibir os produtos em um sistema de grid (row e responsivo) com cards (cartões) contendo imagem, título, preço e um link para detalhes.

## 🚀 Dia 2: Detalhes do Produto e Refinamentos

1. **Página de Detalhes Dinâmica:**
    - Criar a rota dinâmica para os produtos.
    - Capturar o ID do produto pela URL e buscar as informações específicas na API.
    - Exibir os dados completos: Galeria de imagens, descrição detalhada, categoria, avaliação e nível de estoque.
2. **Interface e Experiência:**
    - Garantir que todos os links de navegação usem o componente correto do Next.js para evitar recarregamento de página.
    - Personalizar o layout com Bootstrap para que o site seja totalmente responsivo.
    - Tratar estados de carregamento ou erros básicos (ex: ID de produto inexistente).

## 🛠️ Requisitos de Entrega

- **Funcionalidade:** O site deve listar produtos e abrir a página individual de cada um.
- **Next.js:** Uso correto de rotas dinâmicas e métodos de busca de dados (SSG ou SSR).
- **Bootstrap:** Interface limpa, utilizando componentes como Navbar e Cards, sem quebras no layout mobile.
- **Organização:** Código dividido em componentes reutilizáveis.