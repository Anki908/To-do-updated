import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { enterdata } from '../utils/userSlice';


const PrimaryContainer = () => {
 
    const userText = useRef(null);
    const dispatch = useDispatch();

    const HandleClick = () => {
       if(userText.current.value === ""){
        return null;
       }
        dispatch(enterdata(userText.current.value))
        userText.current.value = null;
       // console.log(userText.current.value)
    }
  return (
    <div className='flex justify-center h-20'>
      <input 
      ref = {userText}
      className='pl-2 w-4/12 border border-black m-4 mt-6' 
      type = "text" 
      placeholder='Type item' />
      <button onClick={HandleClick} className='mt-6 h-10 bg-red-700 pl-2 pr-2 rounded-md text-white'>ADD</button>
    </div>
  )
}

export default PrimaryContainer
