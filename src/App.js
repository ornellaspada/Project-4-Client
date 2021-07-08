/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Register from './components/auth/Register'
import MyFav from './components/runaways/MyFav'
import Login from './components/auth/Login'
import Home from './components/common/HomePage'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import RunShow from './components/runaways/RunShow'
import SingleRun from './components/runaways/SingleRun'

function App() {
  

  return (
    // <>
    <BrowserRouter>
      <Header />
      <NavBar /> 
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path = '/register' component ={Register}/>
        <Route path='/login' component={Login}/>
        <Route path="/runaways/:runId" component={SingleRun} />
        <Route path="/runaways" component={RunShow} />
        <Route path="/favorite" component={MyFav} />
      </Switch>
      <Footer />
    </BrowserRouter>
    // </>
  )
}

export default App
