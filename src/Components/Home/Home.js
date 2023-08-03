import React from 'react'
import { Nav } from '../Header1/Header'
import Herosection from '../Hero-section/Herosection'
import About from '../About/About'
import { Icon } from '../Icons/Icon'
import Register from '../Contact/Register'
// import Project from '../Projectss/Project'
import { Projectss } from '../Projectss/Projectss'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Herosection/>
         
        <Icon/>
        <About/>
        <Projectss/>
        <Register/>
    </div>
  )
}

export default Home