import React from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export const Task = ({Title,Description,id,Completed}) => {
  // const handleChekckbox = (id) =>{
  //     axios.put(`${BACKEND_URL}/`+id)
  //     .then(response=>console.log(response))
  //     .catch(err=>console.log(err))
  // }
  const deleteTask = (id)=>{
    axios.delete(`${BACKEND_URL}/api/v1/task/`+id)
    .then(response=>{
      location.reload()
    })
  }
  return (
    <div>
      <div>
        {Completed ? <div>diplay un-check box with title</div> : <div>display chekbox </div>}
        <div className='bg-amber-700'> throw line if compleleted is true othewise show this {Title}</div>
        <div className='bg-fuchsia-400'>{Description}</div>
        <button onClick={()=>deleteTask(id)} className='cursor-pointer'>delete</button>
    </div>
    </div>
  )
}

