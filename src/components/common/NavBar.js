import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import { isAuthenticated, removeToken } from '../../lib/auth'

function NavBar() {
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () =>{
    removeToken()
    history.push('/login')
  }


  return (
    <nav className='navbar'>
      <div className='navbar-contains-all'>
        <div className='navbar-collection'>
          <div className='home-container navbar-home navbar-items'> 
            <Link to = '/'  style={{ textDecoration: 'none', color: 'black' }} className='link-nav'>
            Home
            </Link>
          </div>
          {isLoggedIn && <div className='navbar-items navbar-gallery'><Link to ='/favorite/' className="link-nav" style={{ textDecoration: 'none', color: 'black' }}>
                  My Gallery
          </Link></div>}
          {isLoggedIn && <div className='navbar-items navbar-collection'><Link to ='/runaways/' className="link-nav" style={{ textDecoration: 'none', color: 'black' }}>
                Collections
          </Link></div>}
        </div>
        <div className='navbar-user'>
          {!isLoggedIn &&  
                  <div className="navbar-items navbar-register"><Link to ='/register/' className="link-nav" href='/' style={{ textDecoration: 'none', color: 'black' }}>Register</Link></div>
                
          }
          {!isLoggedIn ?
            <div className="navbar-items navbar-login"><Link to = '/login/' className=' link-nav' href='/' style={{ textDecoration: 'none', color: 'black'}}>Log In</Link> </div>
            :
            <div className='navbar-items navbar-logout link-nav' onClick= {handleLogout}>
                  Log out</div>
          }
        </div>
      </div>
    </nav>
  )
}
export default NavBar