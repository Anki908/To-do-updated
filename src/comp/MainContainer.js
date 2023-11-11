import React from 'react'
import PrimaryContainer from './PrimaryContainer'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
  return (
    <div className=' min-h-screen max-h-auto  bg-slate-400'>
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
