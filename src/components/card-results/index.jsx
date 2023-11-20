import styled from 'styled-components';

export const Results = () => {
  const Results = styled.section`
      grid-area: results;
      background: hsl(241, 81%, 54%);
      background: linear-gradient(0deg, hsl(241, 81%, 54%) 0%, hsl(252, 100%, 67%) 100%);
      padding: 4.4rem 6rem;
      border-radius: 3rem;
      text-align: center;
      z-index: 1;
      
      h1{
        color: #ebf1ff;
        margin-bottom: 3.2rem;
        font-weight: 400;
      }
      h2{
        font-size: 3rem;
        color: #fff;
        margin-bottom: 2rem; 
      }
      p{
        color: #c8c7ff;
        font-weight: 400;
        font-size: 1.8rem;
      }
      @media (max-width: 500px) {
        border-radius: 0 0 3rem 3rem;
      }
  `

  const Circle = styled.div`
      background: hsl(241, 81%, 54%);
      background: linear-gradient(180deg, hsl(241, 81%, 54%) 0%,  hsla(241, 72%, 46%, 0) 100%);
      aspect-ratio: 1;
      border-radius: 50%;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      margin-bottom: 3.2rem;
  `
  return (
    <Results>
      <h1>Your Result</h1>
      <Circle>
        <span style={{ fontSize: '6.8rem', fontWeight: 'bold', color: '#fff' }}>76</span>
        <span style={{ color: '#c8c7ff', fontSize: '1.8rem' }}>of 100</span>
      </Circle>
      <h2>Great</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </Results>
  )
}