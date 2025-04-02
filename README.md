# Frontend do Blog Pessoal - React + TypeScript + Vite

Este projeto é o frontend do meu blog pessoal, desenvolvido com React, TypeScript e Vite. Ele conta com um design moderno e funcionalidades dinâmicas para exibição de posts, navegação intuitiva e uma experiência fluida para os leitores.

## Recursos

- 🚀 **Desenvolvimento Rápido**: Utiliza Vite para um ambiente ágil e eficiente.
- 🎨 **Interface Moderna**: Criada com React e estilização personalizada.
- 🔍 **Código Tipado**: Uso do TypeScript para maior segurança e escalabilidade.
- 🔧 **Linting Configurável**: Regras do ESLint ajustáveis para produção.

## Plugins Utilizados

Atualmente, são utilizados dois plugins oficiais:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Usa [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Usa [SWC](https://swc.rs/) para Fast Refresh.

## Configuração do ESLint

Para manter um código limpo e padronizado, utilizamos ESLint com regras específicas para React e TypeScript. Se estiver desenvolvendo uma aplicação para produção, recomendamos ativar regras mais rigorosas.

### Atualizando a Configuração do ESLint

Para habilitar verificações mais precisas do TypeScript, ajuste seu ESLint da seguinte forma:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### Plugins Adicionais para React

Para uma melhor experiência com React, recomendamos os seguintes plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

#### Exemplo de Configuração do ESLint:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## Como Rodar o Projeto

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. **Instale as dependências**
   ```sh
   npm install  # ou yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```sh
   npm run dev  # ou yarn dev
   ```

4. **Gerar build para produção**
   ```sh
   npm run build  # ou yarn build
   ```



