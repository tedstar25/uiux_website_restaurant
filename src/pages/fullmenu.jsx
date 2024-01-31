import React from 'react'
import {Footer, FullMenu} from '../container'
import {Navbar} from '../components'

const fullmenu = () => {
  return (
    <div>
      <div className='app_navbar'>
        <Navbar />
      </div>
      <FullMenu/>
      <Footer /> 
    </div>
  )
}

export default fullmenu