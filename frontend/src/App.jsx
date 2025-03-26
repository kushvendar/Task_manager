import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import { Task } from './components/Task'
import {Tasklist}  from './components/Tasklist'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/task/:id" element={<Task/>} />
    <Route path="/tasks" element={<Tasklist/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

