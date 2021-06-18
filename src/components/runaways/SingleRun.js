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

  const handleClick = (e) =>{
    setPopUpOpen(true)
  }
  const handleChange = (e) =>{
    setDateChoosen(e.target.value)
  }
  const handleBuyClick = (e) => {
    setPopUpBuyOpen(true)
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

  console.log('Orn', dateChoosen)
  return runaway ? (

    <>
      <div>
        <div>{runaway.brand}</div>
      </div>
      <div>
        <div>{runaway.season}</div>
      </div>
      <div>
        <div>{runaway.year}</div>
      </div>
      <figure>
        <img src={runaway.image} alt={runaway.brand} />
      </figure>
      <div>
        <h5>{runaway.price}</h5>
      </div>
      <section>

        {isLoggedIn && isFav &&
                        <button onClick={handleRemFav}>
                          Delete from My WishList
                        </button>
        }
                        
                      
        {isLoggedIn && !isFav && 
                        <button onClick={handleAddFav}>
                          Add to My WishList
                        </button>
        }
                      

        {isLoggedIn && (
          <div>
            <Link to={`/runaways/${runaway.id}/comment`}>
              <button> Comment </button>
            </Link>
          </div>
        )} 
        {isLoggedIn && (
          <div>
            <button onClick={handleClick}> Rent </button>
          
          </div>
        )} 
        {isLoggedIn && (
          <div>
            <button onClick={handleBuyClick}> Buy </button>
          
          </div>
        )} 
      </section>
      <div className={ popUpOpen ? 'open' : 'closed' }>
        <p>here is the pop-up</p>
        <input type = 'date' onChange={handleChange}></input>
        <button onClick={handleRent}>Confirm the Rent</button>
        <button>Cancel the Rent</button>
      </div>
      <div className={ popUpBuyOpen ? 'open' : 'closed' }>
        <p>Are you sure you want to continue?</p>
        <button onClick={handleBuy}>Confirm the purchase</button>
        <button>Cancel the purchase</button>
      </div>
    </>

  )
    : <p>Loading</p>
}

export default SingleRun
