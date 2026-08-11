import { useState } from "react"
import { useNavigate } from "react-router"


const ChallengeForm =(props)=>{
    const navigate = useNavigate()
    const initialState = {
        title: "",
        text: "",
        country: "",
        category: "",
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        await props.handleAddChallenge(formData)
        navigate('/challenges')
    }

    return(
        <form onSubmit={handleSubmit} >
            Title 
            <input required type="text" name="title" value={formData.title} onChange={handleChange}/>
            Challenge Text
            <input required type="text" name="text" value={formData.text} onChange={handleChange}/>
            Country
            <input required type="text" name="country" value={formData.country} onChange={handleChange}/>

            Category
            <select required type="text" name="category" value={formData.category} onChange={handleChange}>
                <option value='Photography'>Photography</option>
                <option value='Environment'>Environment</option>
                <option value='Fitness'>Fitness</option>
                <option value='Food'>Food</option>
                <option value='History'>History</option>
                <option value='Other'>Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ChallengeForm