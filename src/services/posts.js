
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/challenges`

const index = async (challengeId) => {

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


export {
    index
}