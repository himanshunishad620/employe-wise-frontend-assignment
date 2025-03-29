import axios from 'axios'
import React, { createContext, useCallback, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import baseUrl from '../constant/apiConfig'
const DataContext=createContext()
export default function DataProvider({children}) {
        const [data,setData]=useState([])
        const [totalPages,setTotalPages]=useState(1)
        const [updating,setUpdating]=useState(false)
        const [error,setError]=useState("")
        // initial user list 
        const fetchData=useCallback(async(id)=>{
          setError("")
          try {
            const res=await axios.get(`${baseUrl}api/users?page=${id}`)
            setData(res.data.data)
            setTotalPages(res.data.total_pages)
          } catch (error) {
            setError(error.message)
          }
        },[])
        const updateData=useCallback(async(id,data)=>{
          // user update details 
          setUpdating(true)
          try {
           await axios.put(`${baseUrl}api/users/${id}`,data)
            toast.success("Successfuly updated!")
          } catch (error) {
            toast.error(error.message || "Something went wrong!")
          } finally{
            setUpdating(false)
          }
        },[])
        // user removal 
        const deleteUser=useCallback(async(id)=>{
          try {
            await axios.delete(`${baseUrl}api/users/${id}`)
            toast.success("Deleted Successfully!")
          } catch (error) {
            toast.error(error.message || "Something went wrong!")
          }
        },[])
  return (
    <DataContext.Provider value={{data,totalPages,updating,error,deleteUser,updateData,fetchData}}>
      {children}
    </DataContext.Provider>
  )
}
export const useData=()=>useContext(DataContext)
