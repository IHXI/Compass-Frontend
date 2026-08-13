import { useEffect } from "react"
import { useParams, Link} from "react-router"
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
}, [])

const handleDelete = async(postId) =>{
    await postService.deletePost(challengeId, postId)
    setPosts(posts.filter((post)=>(post._id !== postId)))
}


    return(
            <main>
                <h1>Posts</h1>
                {posts.map((post)=>(
                <div className="card">
                <p>{post.text}</p>
                <img src={post.img}/>
                
            {post.author === props.user._id ? (
                <div>
                    <Link to={`/challenges/${challengeId}/posts/${post._id}/edit`}>Edit</Link>
                    <button onClick={()=> handleDelete(post._id)}>Delete</button>

                </div>
            ):(
                <></>
            )}
              </div>
            ))}
            </main>
       
    )
    }

export default PostList