import styled from "styled-components"
import './index.css'

export const Item = ({ category, score, icon }) => {

  const Campo = styled.li`
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      padding: 1.8rem 1.5rem 1.4rem;
      border-radius: 1rem;
      position: relative;
      align-items: center;
      margin-bottom: 1.4rem;

      div{
        display: flex;
        gap: 1rem;
      }

      span{
        color: #aaa;
      }
      span:nth-child(1){
        color: #303b59;
      }
    `

  return (
    <Campo>
      <div>
        <img src={icon} alt='icon' />
        <h3>{category}</h3>
      </div>
      <div>
        <h3>
          <span>{score}</span>
          <span> / 100</span>
        </h3>
      </div>
    </Campo>
  )
}