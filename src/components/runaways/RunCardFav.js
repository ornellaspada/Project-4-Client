import { Link } from 'react-router-dom'

function RunCardFav({ id, brand, year, season, image, sale_price, rent_price }) {
  console.log(brand)
  return (
    <div className="singleframe_run1">
      <Link to={`/runaways/${id}`}>
        <div className='brand-border1'>
          <div className= 'brand'>{brand}</div>
        </div>
        <div className='season-border1'>
          <div className='season'>{season}</div>
        </div>
        <div className='year-border1'>
          <div className='year'>{year}</div>
        </div>
        <figure className='figure1'>
          <img className='image'src={image} alt={brand} />
        </figure>
        <div className='sale_price-border1'>
          <h5 className='sale_price'>{sale_price}</h5>
        </div>
        <div className='rent_price-border1'>
          <h5 className='rent_price'>{rent_price}</h5>
        </div>
      </Link>
    </div>
  )
}
export default RunCardFav