import React from 'react'

export const Task = ({Title,Description,Completed}) => {
  return (
    <div>
      <div>{Title}</div>
      <div>{Description}</div>
      <div>{Completed}</div>
    </div>
  )
}

