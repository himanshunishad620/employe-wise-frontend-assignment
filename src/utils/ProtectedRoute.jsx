import React, { createContext } from 'react'
import useAuthHook from '../hook/useAuthHook'
import { Navigate } from 'react-router-dom'
const ProtectedRoute=createContext()
export default function ProtectedRoutes({children}) {
        const {isAuthenticated}=useAuthHook()
  return (
    <ProtectedRoute.Provider value={isAuthenticated}>
      {isAuthenticated ? children : <Navigate to='/login'/>}
    </ProtectedRoute.Provider>
  )
}
