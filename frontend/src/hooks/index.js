import { use, useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const useTask = ()=>{
    const[loading,setLoading]=useState(true)
    const[tasks,setTasks]=useState([])
    useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/task`) 
       .then(response=>{
        setTasks(response.data.task)
        setLoading(false)
       })
    },[])
    return{
        loading,
        tasks
    }
}