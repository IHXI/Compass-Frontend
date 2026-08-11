import { useState } from "react"

const ChallengeForm =(props)=>{
    const initialState ={
            title: "",
            text:"",
            category:"",
            country:"other"
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        props.handleAddChallenge(formData)
    }

    return(
        <form onSubmit={handleSubmit} >
            Title 
            <input required type="text" name="title" value={formData.title} onChange={handleChange}/>
            Challenge Text
            <input required type="text" name="title" value={formData.text} onChange={handleChange}/>
            Country
            <input required type="text" name="title" value={formData.country} onChange={handleChange}/>

            Category
            <select required type="text" name="title" value={formData.category} onChange={handleChange}>
                <option value='Photography'>Photography</option>
                <option value='Environment'>Environment</option>
                <option value='Fitness'>Fitness</option>
                <option value='Food'>Food</option>
                <option value='History'>History</option>
                <option value='Other'>Other</option>
            </select>
        </form>
    )
}

export default ChallengeForm