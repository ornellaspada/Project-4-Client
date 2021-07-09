/* eslint-disable camelcase */
import { Link } from 'react-router-dom'

function RunCard({ id, brand, year, season, image, sale_price, rent_price }) {
  console.log(brand)
  return (
    <div className="singleframe_run">
      <Link to={`/runaways/${id}`} style={{ textDecoration: 'none', color: 'black' }} className='run-card'>
        <div className='run-info'>
          <div className='brand-border'>
            <div className= 'brand'>{brand}</div>
          </div>
          <div className='season-border'>
            <div className='season'>{season}</div>
          </div>
          <div className='year-border'>
            <div className='year'>{year}</div>
          </div>
        </div>
        <figure className='figure'>
          <img className='image'src={image} alt={brand} />
        </figure>
        <div className='run-prices'>
          <div className='sale_price-border'>
            <h5 className='sale_price'>SALE PRICE {sale_price}</h5>
          </div>
          <div className='rent_price-border'>
            <h5 className='rent_price'>RENT PRICE {rent_price}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RunCard