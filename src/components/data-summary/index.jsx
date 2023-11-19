import { Item } from '../info-data'

export const Data = ({ dataSummary }) => {
  return (
    <>
      <ul>
        {dataSummary.length > 0 ? (
          dataSummary.map((data, index) => (
            <Item key={index} icon={data.icon} category={data.category} score={data.score} />
          ))
        ) : (
          <li>Buscando dados</li>
        )}
      </ul>
    </>
  )
}