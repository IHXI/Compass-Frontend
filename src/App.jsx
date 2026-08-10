import Nav from "./components/Nav"
import SignUpForm from "./pages/SignUpForm"
import './App.css'
import { Routes, Route } from "react-router"
import { useEffect, useState } from "react"
import SignInForm from "./pages/SignInForm"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import ChallangeList from "./pages/ChallangeList"
import ChallangeDetails from "./pages/ChallangeDetails"
import ChallangeForm from "./pages/ChallangeForm"
import PostForm from "./pages/PostForm"
import PostList from "./pages/PostList"

import * as userService from './services/userService'
import * as challangeService from './services/challanges'
import * as postService from './services/posts'

const getUserFromToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  return JSON.parse(atob(token.split('.')[1])).payload
}

const App = () => {
  
  const [user, setUser] = useState(getUserFromToken())



  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <main className="app-main">
      <Routes>
        <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />
        {user ? (
          <>
            <Route path='/challanges' element={<ChallangeList/>} />
            <Route path='/challanges/:challangeId' element={<ChallangeDetails user={user} />} />
            <Route path='/challanges/new' element={<ChallangeForm/>} />
            <Route path='/challanges/:challangeId/edit' element={<ChallangeForm/>}/>


            <Route path='/challanges/:challangeId/posts' element={<PostList/>}/>
            <Route path='/challanges/:challangeId/posts/:postId/edit' element={<PostForm/>}/>
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm setUser={setUser} />} />
            <Route path='/sign-in' element={<SignInForm setUser={setUser} />} />
          </>
        )}
      </Routes>
      </main>
    </div>
  )
}

export default App