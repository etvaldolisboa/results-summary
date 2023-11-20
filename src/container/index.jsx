import styled from "styled-components"

export const Container = (props) => {
  const Container = styled.main`
      background-color: hsl(221, 100%, 96%) ;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      
      display: grid;
      grid-template-areas: 'results summary ';
      grid-template-columns: 368px 388px ;
      
      @media (max-width: 768px) {
        grid-template-areas:
        'results'
        'summary';
        grid-template-columns: 1fr;
      }
      @media (max-width: 500px) {
        padding: 0;
        background-color: #fff;
        
      }
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}