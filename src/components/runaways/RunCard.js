import { Link } from 'react-router-dom'

function RunCard({ id, brand, year, season, image, sale_price, rent_price }) {
  console.log(brand)
  return (
    <div className="singleframe_run">
      <Link to={`/runaways/${id}`}>
        <div className='brand-border'>
          <div className= 'brand'>{brand}</div>
        </div>
        <div className='season-border'>
          <div className='season'>{season}</div>
        </div>
        <div className='year-border'>
          <div className='year'>{year}</div>
        </div>
        <figure className='figure'>
          <img className='image'src={image} alt={brand} />
        </figure>
        <div className='sale_price-border'>
          <h5 className='sale_price'>{sale_price}</h5>
        </div>
        <div className='rent_price-border'>
          <h5 className='rent_price'>{rent_price}</h5>
        </div>
      </Link>
    </div>
  )
}

export default RunCard