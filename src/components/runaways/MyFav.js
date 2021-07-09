import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserProfile } from '../../lib/api'
// import RunCard from './RunCard'
import RunCardBuy from './RunCardBuy'
import RunCardRent from './RunCardRent'
import RunCardFav from './RunCardFav'


function MyFav() {
  const [users, setUsers] = React.useState(null)
  const { id } = useParams()
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserProfile(id)
        console.log(res)
        setUsers(res.data)
      } catch (err) {
        true
      }
    }
    getData()
  }, [id])
  console.log(users)

  return (
    <>
      <div>
        <h2 className='fav-title'>Rentals</h2>
        <div>
          {users && users.rentals.map((rental) => {
            console.log(rental)
            return ( <RunCardRent key={rental.id}  {...rental} />)          
          })
          }
        </div>
      </div>
      <div>
        <h2 className='fav-title'>Purchases</h2>
        <div>
          {users && users.purchases.map((purchase) => {
            console.log(purchase)
            return ( <RunCardBuy key={purchase.id} datePurchased={purchase.date_purchased} runaway={purchase.runaway}/>)          
          })
          }
        </div>
      </div>
      <div>
        <h2 className='fav-title'>WishList</h2>
        <div>
          {users && users.favorites.map((favorite) => {
            console.log(favorite)
            return ( <RunCardFav key={favorite.id} {...favorite} />)          
          })
          }
        </div>
      </div>
    </>
  )
}

export default MyFav