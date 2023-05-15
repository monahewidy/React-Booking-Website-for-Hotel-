import React from 'react'
	import {Navigate, Outlet} from 'react-router-dom'
import UserProfile from '../userProfile/UserProfile'
	const useAuth=()=>{
	  const user=localStorage.getItem('loggedUser')
	  if(user){
	    return true
	  } else {
	    return false
	  }
	}
	const  ProtectedRoutes=() =>{
	 const auth=useAuth()
	 return auth?<UserProfile/>: <Navigate to="/"/>
	}
	export default ProtectedRoutes;;