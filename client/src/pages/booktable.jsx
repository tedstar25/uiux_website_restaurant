import React from 'react'
import { BookTable} from '../container'
import {Navbar} from '../components'


const booktable = () => {
  return (
    <div>
      <div className='app_navbar'>
        <Navbar />
      </div>
      <BookTable/>
    </div>
  )
}

export default booktable