import Nav from "./components/Nav"
import SignUpForm from "./pages/SignUpForm"
import './App.css'
import { Routes, Route, useNavigate } from "react-router"
import { useEffect, useState } from "react"

import SignInForm from "./pages/SignInForm"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import ChallengeList from "./pages/ChallengeList"
import ChallengeDetails from "./pages/ChallengeDetails"
import ChallengeForm from "./pages/ChallengeForm"
import PostForm from "./pages/PostForm"
import PostList from "./pages/PostList"

import * as userService from './services/userService'
import * as challengeService from './services/challenges'
import * as postService from './services/posts'

const getUserFromToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  return JSON.parse(atob(token.split('.')[1])).payload
}

const App = () => {
  const navigate =useNavigate()
  
  const [user, setUser] = useState(getUserFromToken())
  const [challenges, setChallenges] = useState([])


  useEffect(()=>{

    const fetchAllChallenges = async () => {
      const challengesData = await challengeService.index()
      setChallenges(challengesData)
    }
    if (user) fetchAllChallenges()
  }, [user])



  const handleAddChallenge = async(formData) =>{
    const newChallenge = await challengeService.create(formData)
    setChallenges([...challenges, newChallenge])
  }
  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <main className="app-main">
      <Routes>
        <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />
        {user ? (
          <>
            <Route path='/challenges' element={<ChallengeList challenges={challenges}/>} />
            <Route path='/challenges/:challengeId' element={<ChallengeDetails user={user} challenges={challenges}/>} />
            <Route path='/challenges/new' element={<ChallengeForm handleAddChallenge={handleAddChallenge}/>} />
            <Route path='/challenges/:challengeId/edit' element={<ChallengeForm/>}/>

            <Route path='/challenges/:challengeId/posts' element={<PostList/>}/>
            <Route path='/challenges/:challengeId/posts/:postId/edit' element={<PostForm/>}/>
          </>
        ) : (
          <>
            <Route path='/auth/sign-up' element={<SignUpForm setUser={setUser} />} />
            <Route path='/auth/sign-in' element={<SignInForm setUser={setUser} />} />
          </>
        )}
      </Routes>
      </main>
    </div>
  )
}

export default App
