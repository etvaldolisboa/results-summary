import { useState } from "react"
import { Data } from '../data-summary';
import { Button } from '../button'
import  dataSummaryJson from '../../json/data.json'
import styled from 'styled-components';


export const Summary = () => {
  const [dataSummary] = useState(dataSummaryJson.data)

  const Summary = styled.section`
      grid-area: summary;
      background-color: #fff;
      padding: 4.1rem 3rem 4.4rem 6rem;
      border-radius: 0 3rem 3rem 0;
      left: -2rem;
      position: relative;
      box-shadow: .5rem .5rem 1rem hsl(224, 30%, 27%, .2);
      
      h2{
        margin-bottom: 3rem;
        color: hsl(224, 30%, 27%);
      }
  `

  return (
    <Summary>
      <h2>Summary</h2>
      <Data dataSummary={dataSummary} />
      <Button>Continue</Button>
    </Summary>
  )
}