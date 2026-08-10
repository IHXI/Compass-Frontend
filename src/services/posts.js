const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/challanges`

const index = async (challangeId) => {
    try {
        const res = await fetch(`${BASE_URL}/${challangeId}/posts`, {
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