import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
    const auth = localStorage.getItem("userToken")
  return (
    <>
     {auth?<Outlet/>:<Navigate to="/login"/>}
    </>
  )
}