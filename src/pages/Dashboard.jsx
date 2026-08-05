import { useEffect, useState } from "react";
import * as userService from '../services/userService'

const Dashboard = (props)=>{
 console.log(props,"props");

 const [allUsers, setAllUsers] = useState([])

   useEffect(()=>{
    const fetchAllUsers = async ()=>{
      try{
        const usersData = await userService.index()
        setAllUsers(usersData)
      }catch(error){
        console.log(error)
    }
  } 
  fetchAllUsers()
},[])
 
    return(
        <>
        <h1>Dashboard</h1>
        <div>
        {allUsers.map((user)=>(
              <ul>
                    <li>{user.username}</li>
                </ul>
        ))}
</div>
        </>
    ) 
    
}

export default Dashboard