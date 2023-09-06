import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h2,
h3,
h4
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

button {
  display: block;
  padding: 2px 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border: 3px solid #B8B997;
   background-color: #E5E5C8;
}

button:hover {
  color: #fff;
  border: 3px solid #2d66c3;
  background-color: #2d66c3;
}
`;