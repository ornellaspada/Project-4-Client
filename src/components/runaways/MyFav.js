import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserProfile } from '../../lib/api'
// import RunCard from './RunCard'
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
        <h2>Rentals</h2>
        <div>
          {users && users.rentals.map((rental) => {
            console.log(rental)
            return ( <RunCardFav key={rental.id} {...rental.runaway} />)          
          })
          }
        </div>
      </div>
      <div>
        <h2>Purchases</h2>
        <div>
          {users && users.purchases.map((purchase) => {
            console.log(purchase)
            return ( <RunCardFav key={purchase.id} {...purchase.runaway} />)          
          })
          }
        </div>
      </div>
      <div>
        <h2>WishList</h2>
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