import React from 'react'
import PrimaryContainer from './PrimaryContainer'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
  return (
    <div className='h-screen bg-slate-400'>
      <div className=''>
         <PrimaryContainer/>
      </div>
      <div>
         <SecondaryContainer /> 
      </div>
    </div>
  )
}

export default MainContainer
