import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, updateData } from '../utils/userSlice';

const SecondaryContainer = () => {

  var info = useSelector((store) => store.Task);
  const dispatch = useDispatch();
  //console.log(info)

  // const [on , setOn] = useState(false);

  const HandleDelete = (e) => {
    dispatch(deleteData(e));
    //console.log(info);
  }

  // const n = info?.data?.length;
  // if(info?.data?.[n-1] === ""){
  //   return null;
  // }

  const HandleToggle = (inf) => {
     //dispatch(updateData(inf));
  }

  return (
    <div>
      <ol>
        {
           info.data.map((inf , id) => (
            <div key = {id} className= "flex ml-32 mt-8  h-10 mr-32 rounded-md pl-2">
              <li className="font-bold pt-2 rounded-md">{id+1}. {inf}</li>
              <button onClick={() => HandleToggle(inf)} className='ml-4 pl-1 pr-1 bg-green-600 rounded-lg text-white'>Completed</button>
              <button onClick={() => HandleDelete(inf)} className = 'ml-4 pl-1 pr-1 bg-red-700 rounded-lg text-white'> Remove </button>
            </div>
          ))
        }
      </ol>
    </div>
  )
}

export default SecondaryContainer