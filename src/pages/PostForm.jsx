import * as postService from "../services/posts"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"

const PostForm =()=>{
    const {challengeId} = useParams()
    const navigate = useNavigate()

    return(
        <div>
            <h1>Post</h1>
        </div>
    )
}

export default PostForm