import React, { useState } from 'react'
import { BACKEND_URL } from "../config"
import axios from 'axios'
import icon from "../images/icon.png"

const Create = () => {
 const[title,setTitle]=useState([])
 const[description,setDescription]=useState([])

  const addTask = () => {
    axios.post(`${BACKEND_URL}/api/v1/task`,{title:title,description:description,completed:false})
    .then((result)=>{
        location.reload()
        
    })
    .catch((err)=>console.log(err))
}

  return (
      <div>
        <h2 className='text-[#002765] flex items-center mb-[20px] font-extrabold'>
            Task Manager
             <img className='w-[30px] ml-[10px]' src={icon} alt="icon" />
      </h2>
      <div className='flex items-center justify-between bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px]'>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} className='flex-1 p-[10px] bg-transparent' placeholder='Title' />
      
      <button onClick={addTask} className='p-[15px] pl-[50px] pr-[50px] bg-[#ff5945] text-white font-[16px] cursor-pointer rounded-[40px]'>Add</button>
      </div>
      <input type='text' onChange={(e)=>setDescription(e.target.value)} className='flex-1 p-[10px] w-full rounded-[30px] bg-[#edeef0]' placeholder='Description'/>
      </div>
  )
}

export default Create