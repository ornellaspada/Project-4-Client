import React from 'react'
// import axios from 'axios'


import { useParams, Link } from 'react-router-dom'
import {
  getAllRunaways
} from '../../lib/api'
// import { isAuthenticated, isOwner } from '../../lib/auth'
// import Error from '../common/Error'
import { useHistory } from 'react-router'
import RunCard from './RunCard'

function RunShow() {
  const [runaways, setRunaways] = React.useState(null)
  const [selectedBrand, setSelectedBrand] = React.useState('Brands')
  const [selectedSeason, setSelectedSeason] = React.useState('Season')
  const [selectedYear, setSelectedYear] = React.useState('Year')
  const [isError, setIsError] = React.useState(false)
  const history = useHistory()
  const { runawayId } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllRunaways()
        setRunaways(res.data)
        setIsError(false)

      } catch (err) {
        setIsError(true)
      }
    }
  
    
    getData()
  }, [runawayId])

  const handleChange = (e) =>{
    setSelectedBrand(e.target.value)
    setSelectedSeason(e.target.value)
    setSelectedYear(e.target.value)
  }
  console.log('select value', selectedBrand)
  const filteredrunaways = runaways?.filter((runaway) =>{
    return runaway.brand === selectedBrand.toUpperCase() || selectedBrand === 'Brands' ||
    runaway.season === selectedSeason || selectedSeason === 'Season' ||
    runaway.year === selectedYear.toString() || selectedYear === 'Year'

  })
  console.log('Ciao', selectedYear.toString())



  console.log(runaways)
  return (
    <>
      <body>
        <div className='frame_all'>
          <div className='button_main_frame'>
            <div>
              <select onChange={handleChange}>
                <option>Brands</option>
                <option>Prada</option>
                <option>Hermes</option>
                <option>Giorgio Armani</option>
              </select>
            </div>
            <div>
              <select onChange={handleChange}>
                <option>Season</option>
                <option>Fall-Winter</option>
                <option>Spring-Summer</option>
              </select>
            </div>
            <div>
              <select onChange={handleChange}>
                <option>Year</option>
                <option>1999</option>
                <option>1995</option>
                <option>2000</option>
                <option>2001</option>
              </select>
            </div>
          </div>
          <section className='run-bigframe'>
            <div className='runframe'>
              {runaways && (
                filteredrunaways.map(runaway => <RunCard key={runaway.id} {...runaway} />)
              )}
            </div>
          </section>
        </div>
      </body>

    </>

  )
}

export default RunShow