import React, { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import trashcan from '../images/trashcan.png'
import checked from '../images/checked.png'
import unchecked from '../images/unchecked.png'

export const Task = ({Title,Description,id,Completed}) => {
  const [buttonHandle,setButtonHandle] = useState(false)

 const checkHandler = (id)=>{
    axios.put(`${BACKEND_URL}/api/v1/task/`+id,{Completed:true})
    .then((result)=>{
  })
  .catch((err)=>console.log(err))
  setButtonHandle(true)
  }

const deleteTask = (id)=>{
  axios.delete(`${BACKEND_URL}/api/v1/task/`+id)
  .then(result=>{
    location.reload()
  })
  .catch(err=>console.log(err))
}
  return (
    <div className='bg-amber-200 rounded-[21px] mt-[15px]'>
      <div className='flex items-center'>
        {buttonHandle ? <div class="flex items-center" >
          <input checked id="ml-[4px] checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"/>
          </div> : <button className='ml-[3px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500' onClick={()=>checkHandler(id)}></button>
          }
        {buttonHandle ? <div className='text-[19px] font-medium pt-[12px] pl-[8px] pb-[12px] pr-[8px] cursor-pointer relative list-none line-through'>  {Title}</div> : <div className='text-[19px] font-medium pt-[12px] pl-[8px] pb-[12px] pr-[8px] cursor-pointer relative list-none '>  {Title}</div>
        }
        <button onClick={()=>deleteTask(id)} className='cursor-pointer pl-[325px]'><img src={trashcan} alt="" className='w-[20px]' /></button>
    </div>
    <div className='text-[17px] pt-[3px] pl-[8px] pb-[12px] pr-[8px] cursor-pointer relative list-none'>{Description}</div>
    </div>
  )
}

