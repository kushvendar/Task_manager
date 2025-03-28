import React, { useState } from 'react'
import {Task} from './Task'
import { useTask } from '../hooks'
import checked from '../images/checked.png'
import unchecked from '../images/unchecked.png'
import Create from './Create'

export const Tasklist = () => {

  const {loading,tasks} = useTask()

  if(loading){
    return <div className='mt-[100px] mb-[20px] ml-[500px] mr-auto pt-[40px] pb-[70px] pr-[30px] pl-[30px]'>
        <div class="flex flex-row gap-2">
    <div class="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
    <div class="flex flex-col gap-2">
      <div class="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
      <div class="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
    </div>
  </div>
    </div>
  
  }

  return (
  <div className='box-border'>
    <div className='w-full min-h-screen p-[10px] bg-linear-135 from-[#153677] to-[#4e085f]'>
    <div className='w-full max-w-[540px] bg-white mt-[100px] mb-[20px] ml-auto mr-auto pt-[40px] pb-[70px] pr-[30px] pl-[30px] rounded-[10px]'>
    <Create/>
        {tasks.map(task=>{
          console.log(task.id)
       return <Task key={task.id} Title={task.title} Description={task.description} id={task.id}/>
        })}
    </div>
  </div>
  </div>
)  
}


