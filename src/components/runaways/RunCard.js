import { Link } from 'react-router-dom'

function RunCard({ id, brand, year, season, image, price }) {
  console.log(brand)
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/runaways/${id}`}>
        <div>
          <div>{brand}</div>
        </div>
        <div>
          <div>{season}</div>
        </div>
        <div>
          <div>{year}</div>
        </div>
        <figure>
          <img src={image} alt={brand} />
        </figure>
        <div>
          <h5>{price}</h5>
        </div>
      </Link>
    </div>
  )
}

export default RunCard