import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


import {
  getSingleRunaway,
  deleteRunaway, 
  checkFav,
  removeFav, 
  addFav,
  addRent, 
  addBuy
} from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'


function SingleRun() {
  const { runId } = useParams()
  const [runaway, setRunaway] = React.useState(null)
  const history = useHistory()
  const [popUpOpen, setPopUpOpen] = React.useState(false)
  const [popUpBuyOpen, setPopUpBuyOpen] = React.useState(false)
  const [dateChoosen, setDateChoosen] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoggedIn = isAuthenticated()
  const [isFav, setIsFav] = React.useState(null)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleRunaway(runId)
        setRunaway(res.data)
        setIsError(false)

      } catch (err) {
        setIsError(true)
      }
    }
  
    
    getData()
  }, [runId])
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        if (isLoggedIn){

          const res = await checkFav(runId)
          console.log(res.data.isFav)
          setIsFav(res.data.isFav)
          setIsError(false)
        }
      } catch (err) {
        setIsError(true)
        //return <p>error</p>
      }
    }
    getData()
  }, [runId, isLoggedIn])

  const handleDelete = async () => {
    await deleteRunaway(runaway.id)
    history.push('/favorite')
  }

  const handleAddFav = async () => {
    await addFav(runaway.id)
    setIsFav(true)
  }

  const handleRemFav = async () => {
    await removeFav(runaway.id)
    setIsFav(false)
  }
  console.log(isLoggedIn)

  const handleClick = () =>{
    console.log('click')
    setPopUpOpen(true)
    setPopUpBuyOpen(false)
  }
  const handleChange = (e) =>{
    setDateChoosen(e.target.value)
  }
  const handleBuyClick = () => {
    console.log('click3')
    setPopUpBuyOpen(true)
    setPopUpOpen(false)
  }

  const handleRent = async () =>{
    await addRent( runaway.id, { 'date_returned': dateChoosen } ) 
    setPopUpOpen(false)
    history.push('/favorite')
  }
  const handleBuy = async () =>{
    await addBuy(runaway.id) 
    history.push('/favorite')
  }
  const cancelBuy = async ()=>{
    setPopUpBuyOpen(false)
  }
  const cancelRent = async ()=>{
    setPopUpOpen(false)
  }

  return runaway ? (

    <>
      <div className='single-run-container'>
        <div className='s-r-info-container'>
          <div className='brand-sigle-run'>
            <div className='brand-single'>{runaway.brand}</div>
          </div>
          <div className='brand-single-season'>
            <div>{runaway.season}</div>
          </div>
          <div className='brand-single-year'>
            <div>{runaway.year}</div>
          </div>
        </div>
        <div className='single-run-display'>
          <figure className='b-s-figure'>
            <img src={runaway.image} alt={runaway.brand} className='s-r-image' />
          </figure>
          <section className='buttons-to-user'>

            {isLoggedIn && isFav &&
                        <button className='s-r-botton-delete'onClick={handleRemFav}>
                          DELETE FROM MY WISHLIST
                        </button>
            }
                        
                      
            {isLoggedIn && !isFav && 
                        <button className='s-r-botton-add'onClick={handleAddFav}>
                          ADD TO MY WISHLIST
                        </button>
            }
                      

            {isLoggedIn && (
              <>
                {//<div>
                  //   <Link to={`/runaways/${runaway.id}/comment`}>
                  //     <button> Comment </button>
                  //   </Link>
                  // </div>
                }
              </>
            )} 
            {isLoggedIn && (
              <div>
                <button className='s-r-botton-rent' onClick={handleClick}> RENT: $20 per day </button>
          
              </div>
            )} 
            {isLoggedIn && (
              <div>
                <button className='s-r-botton-buy'onClick={handleBuyClick}> Buy: {runaway.sale_price}</button>
          
              </div>
            )} 
          </section>
        </div>
        <div className={ popUpOpen ? 'open' : 'closed' }>
          <div className='pop-up-frame'>
            <p>Do you want to confirm the rent?</p>
            <input type = 'date' onChange={handleChange}></input>
            <button className='button-pop-up' onClick={handleRent}>Confirm the Rent</button>
            <button className='button-pop-up' onClick={cancelRent}>Cancel the Rent</button>
          </div>
        </div>
        <div className={ popUpBuyOpen ? 'open' : 'closed' }>
          <div className='pop-up-frame'>
            <p>Are you sure you want to continue?</p>
            <button className='button-pop-up' onClick={handleBuy}>Confirm the purchase</button>
            <button className='button-pop-up' onClick={cancelBuy}>Cancel the purchase</button>
          </div>
        </div>
      </div>
    </>

  )
    : <p>Loading</p>
}

export default SingleRun
