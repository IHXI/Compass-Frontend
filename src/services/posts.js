
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/challenges`

const index = async (challengeId) => {
    console.log(challengeId)
    try {
        const res = await fetch(`${BASE_URL}/${challengeId}/posts`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    } 
}

const create = async (challengeId, formData) =>{
    try {
        const res = await fetch(`${BASE_URL}/${challengeId}/posts`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        
    }
}

const update = async (challengeId, postId, postData) => {
    const res = await fetch(`${BASE_URL}/${challengeId}/posts/${postId}`, {
        method: "PUT",
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    const data = await res.json()
    return data
}


export {
    index,
    create,
    update,
}