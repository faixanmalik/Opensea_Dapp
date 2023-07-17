import React from 'react'
import Header from '../components/Header/Header'

const TopNavbarLayout = ({children}) => {
  return (
    <div className='mt-20'>
      <Header/>
      <main className=''>{children}</main>
    </div>
  )
}

export default TopNavbarLayout