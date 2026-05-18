# Visualizador de Perfil do GitHub 🚀

Uma aplicação web simples e elegante que utiliza a API do GitHub para buscar e exibir informações de usuários, como bio, seguidores, repositórios e muito mais.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo.
- **CSS3**: Estilização moderna, incluindo:
  - Design Responsivo (se adapta a celulares e tablets).
  - Animações suaves.
  - Reset de estilos para consistência entre navegadores.
- **JavaScript (ES6+)**:
  - Consumo de API (Fetch API).
  - Manipulação de DOM.
  - Módulos (import/export) para organização do código.
- **DevIcons**: Ícones estilizados para tecnologia.

## ✨ Funcionalidades

- [x] Busca de perfis em tempo real através da API do GitHub.
- [x] Exibição de dados do perfil (Avatar, Nome, Bio, Seguidores e Seguindo).
- [x] Listagem dos repositórios públicos do usuário.
- [x] **Atalho de teclado**: Busca acionada ao pressionar a tecla `Enter`.
- [x] Estados de "Carregando" e mensagens de erro amigáveis (ex: usuário não encontrado).

## 🚀 Como Executar o Projeto

Como o projeto utiliza Módulos JavaScript (`type="module"`), ele precisa ser executado através de um servidor local para funcionar corretamente.

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no seu editor de código (ex: VS Code).
3. Utilize uma extensão como o **Live Server** (do VS Code) para abrir o arquivo `index.html`.
4. Digite um nome de usuário do GitHub no campo de busca e divirta-se!

## 📂 Estrutura de Pastas

```text
├── index.html          # Página principal
├── README.md           # Documentação do projeto
└── src/
    ├── css/            # Estilizações (reset, styles, responsive, animations)
    └── js/             # Lógica (serviços de API, UI e index principal)
```

---
Projeto desenvolvido como parte do curso DevQuest.
