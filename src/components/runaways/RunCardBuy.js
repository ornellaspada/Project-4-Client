/* eslint-disable camelcase */
import { Link } from 'react-router-dom'

function RunCardBuy({ datePurchased, runaway }) {
  
  const { id, brand, year, season, image, sale_price } = runaway
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
          <h5 className='sale_price'>SALE PRICE {sale_price}</h5>
          <h5 className='sale_date'>PURCHASING DATE {datePurchased}</h5>
        </div>
      </Link>
    </div>
  )
}
export default RunCardBuy