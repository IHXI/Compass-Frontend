import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react"
import * as postService from '../services/posts'

const PostList =(props)=>{

    const [posts, setPosts] = useState([])
    const { challengeId } = useParams()
    

useEffect(()=>{
    
  const fetchAllPosts = async()=>{
    const postsData = await postService.index(challengeId)
    setPosts(postsData)
  }
  fetchAllPosts()
//   if (user) fetchAllPosts()
}, [])



    return(
        <div>
            <h1>Posts</h1>
            <button>Add a post</button>
            <h2>{posts.map((post)=>(
                <div className="postCard">
                <p>{post.text}</p>
                <p>{post.img}</p>
                </div> 
            ))}</h2>
        </div>
    )
    }

export default PostList