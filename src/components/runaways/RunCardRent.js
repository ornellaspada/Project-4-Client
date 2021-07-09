/* eslint-disable camelcase */
import { Link } from 'react-router-dom'

function RunCardRent({ runaway, date_rented, date_returned }) {
  console.log(date_rented, runaway)
  const { id, brand, year, season, image, rent_price } = runaway
  return (
    <div className="singleframe_run1">
      <Link to={`/runaways/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className='show-details'>
          <div className= 'brand'>{brand}</div>
          <div className='season'>{season}</div>
          <div className='year'>{year}</div>
        </div>
        <figure className='figure1'>
          <img className='image1'src={image} alt={brand} />
        </figure>
        <div className='bottom_details'>
          <h5 className='rent_price'>RENT PRICE {rent_price}</h5>
          <h5 className='rent_rented'>DATE RENTED {date_rented}</h5>
          <h5 className='rent_returned'>DATE RETURNED {date_returned}</h5>
        </div>
      </Link>
    </div>
  )
}
export default RunCardRent