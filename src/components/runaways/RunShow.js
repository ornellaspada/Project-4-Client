import React from 'react'
// import axios from 'axios'


import { useParams } from 'react-router-dom'
import {
  getAllRunaways
} from '../../lib/api'
// import { isAuthenticated, isOwner } from '../../lib/auth'
// import Error from '../common/Error'
// import { useHistory } from 'react-router'
import RunCard from './RunCard'

function RunShow() {
  const [runaways, setRunaways] = React.useState(null)
  const [selectedBrand, setSelectedBrand] = React.useState('Brands')
  const [selectedSeason, setSelectedSeason] = React.useState('Season')
  const [selectedYear, setSelectedYear] = React.useState('Year')
  
  
  // eslint-disable-next-line
  const [ IsError,setIsError] = React.useState(false)
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
  }, [runawayId, setIsError])
  
  const handleBrandSelect = (e) =>{
    setSelectedBrand(e.target.value)
    
  }
  const handleSeasonSelect = (e) =>{
    setSelectedSeason(e.target.value)
  
  }
  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value)
  }
  console.log('brand', selectedBrand)
  console.log('season', selectedSeason)
  console.log('year', selectedYear)

  const filteredrunaways = runaways?.filter((runaway) => {
    return (
      (runaway.brand.toUpperCase() === selectedBrand.toUpperCase() || selectedBrand === 'Brands') &&
      (runaway.season === selectedSeason || selectedSeason === 'Season') &&
      (runaway.year === selectedYear.toString() || selectedYear === 'Year')
    )
  })

  console.log(runaways)
  return (
    <>
  
      <div className='frame_scroll'>
        <div className='scroll_main_frame'>
          <div className='button-brands'>
            <select className='in-button-brands'onChange={handleBrandSelect}>
              <option className='scroll-text'>BRAND</option>
              <option value={'Prada'}>Prada</option> 
              <option value={'Hermes'}>Hermes</option>
              <option value={'Giorgio Armani'}>Giorgio Armani</option>
            </select>
          </div>
          <div className='button-season'>
            <select className='in-button-season'onChange={handleSeasonSelect}>
              <option>SEASON</option>
              <option value={'Fall'}>Fall</option>
              <option value={'Spring-Summer'}>Spring-Summer</option>
            </select>
          </div>
          <div className='button-year'>
            <select className='in-button-year'onChange={handleYearSelect}>
              <option>YEAR</option>
              <option value={'1998'}>1998</option>
              <option value={'1996'}>1996</option>
              <option value={'1999'}>1999</option>
              <option value={'1995'}>1995</option>
              <option value={'2000'}>2000</option>
              <option value={'2001'}>2001</option>
            </select>
          </div>
        </div>
        <section className='run-bigframe'>
          <div className='runframe'>
            {filteredrunaways && (
              filteredrunaways.map(runaway => <RunCard key={runaway.id} {...runaway} />)
            )}
          </div>
        </section>
      </div>
    

    </>

  )
}

export default RunShow