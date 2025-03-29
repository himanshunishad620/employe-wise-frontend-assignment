import React from 'react'
import Login from './components/authPages/Login'
import { Outlet, Route, Routes } from 'react-router-dom'
import List from './components/otherPages/List'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './utils/ProtectedRoute'

export default function App() {
  return (
    <div className='h-screen w-screen'>
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <Outlet/>
          </ProtectedRoute>}>
            <Route index element={<List/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes> 
        <ToastContainer/>
    </div>
  )
}
