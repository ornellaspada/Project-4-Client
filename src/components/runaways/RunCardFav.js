import { Link } from 'react-router-dom'

function RunCardFav({ id, brand, year, season, image }) {
 
  // const { id, brand, year, season, image } = runaway
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
      </Link>
    </div>
  )
}
export default RunCardFav