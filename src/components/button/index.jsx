import styled from 'styled-components';

export function Button() {

  const Button = styled.button`
      background: hsl(241, 81%, 54%);
      background: linear-gradient(0deg,hsl(241, 81%, 54%) 0%, hsl(252, 100%, 67%) 100%);
      color: hsl(0, 0%, 100%);
      padding: 1.8rem;
      border: none;
      border-radius: 3rem;
      text-align: center;
      width: 100%;
      font-size: 1.8rem;
      margin-top: 2rem;
  `
  return (
    <Button> Continue </Button>
  )
}