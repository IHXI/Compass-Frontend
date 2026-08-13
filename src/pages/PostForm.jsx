import * as postService from "../services/posts"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

const PostForm =()=>{
    const {challengeId, postId} = useParams()
    const navigate = useNavigate()
    const initialState = {
        text: "",
        img: "",
    }
    const [formData, setFormData]= useState(initialState)

    useEffect(()=>{
        const fetchPost = async()=>{
            if (postId){
                const posts = await postService.index(challengeId)
                const post = posts.find((post) => (
                    post._id === postId
                ))
                setFormData(post)
            }
            if (postId){
                fetchPost()
            }
            return () => setFormData(initialState)
        }
    },[postId])

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        await postService.create(challengeId, formData)
        navigate(`/challenges/${challengeId}/posts`)
    }

    return(
        <div>
            <h1>{postId? "Edit Post":"Add a Post"}</h1>
            <form onSubmit={handleSubmit}>
                Text 
                <input type="text" name="text" value={formData.text} onChange={handleChange} />
                img
                <input type="text" name="img" value={formData.img} onChange={handleChange} />
                <button type="submit">{postId ? "Edit Post": "Add Post"}</button>
            </form>
        </div>
    )
}

export default PostForm