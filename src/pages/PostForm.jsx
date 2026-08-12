import * as postService from "../services/posts"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"

const PostForm =()=>{
    const {challengeId} = useParams()
    const navigate = useNavigate()
    const initialState = {
        text: "",
        img: "",
    }
    const [formData, setFormData]= useState(initialState)

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
            <h1>Add a Post</h1>
            <form onSubmit={handleSubmit}>
                Text 
                <input type="text" name="text" value={formData.text} onChange={handleChange} />
                img
                <input type="text" name="img" value={formData.img} onChange={handleChange} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm