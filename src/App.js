// import { Button } from "./components/button";
import { createGlobalStyle } from "styled-components";

import { Results } from "./components/card-results";
import { Summary } from "./components/card-summary";
import { Container } from "./container";
import './css/root.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Results />
        <Summary />
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  html{
    font-family: 'HankenGrotesk', sans-serif;
    font-weight: 300;
    font-size: 62.5%;
  }

  main {
    padding: 20px 30px;
    min-height:100vh;
    box-sizing: border-box;
    font-size: 1.6rem;
  }

    ul {
      list-style-type: none;
      flex-grow: 1;
    }
`;

export default App;
