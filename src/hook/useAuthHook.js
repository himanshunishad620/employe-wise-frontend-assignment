import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import baseUrl from '../constant/apiConfig'
export default function useAuthHook() {
        const [loading,setLoading]=useState(false)
        const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem("token") || false)
        // authentication 
        const handleLogin=async({email,password})=>{
                setLoading(true)
                try {
                        const res=await axios.post(`${baseUrl}api/login`,{email,password})
                        localStorage.setItem("token",res.data.token)
                        toast.success("Logged in successfuly!")
                        setIsAuthenticated(res.data.token)
                } catch (error) {
                        toast.error(error.message || "Something went wrong!")      
                } finally{
                        setLoading(false)
                }
        }
  return ({handleLogin,loading,isAuthenticated})
}
