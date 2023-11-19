import styled from "styled-components"
import './index.css'

export const Container = (props) => {
  const Container = styled.main`
      background-color: hsl(221, 100%, 96%) ;
      min-height: 100vh;
      align-items: center;
      justify-content: center;

      display: grid;
      grid-template-areas: 'results summary ';
      grid-template-columns: 368px 368px ;
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}