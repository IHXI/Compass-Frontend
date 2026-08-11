import { Link, useParams } from "react-router"
import * as challengeService from "../services/challenges"
import { useEffect, useState } from "react"

const ChallengeDetails =(props)=>{
    const {challengeId} = useParams()
    const [challenge, setChallenge] = useState(null)

    useEffect(()=>{
        const fetchChallenge = async()=>{
            const challengeData = await challengeService.show(challengeId)
            setChallenge(challengeData)
        }
        fetchChallenge()
    }, [challengeId])

    if (!challenge) {
        return <p>Loading...</p>
    }
    return(
        <article>
            <header>
                <h1>{challenge.title}</h1>


            </header>
            <span><h4>{challenge.text}</h4></span>
            <footer>
                <button>Participate</button>
                <Link to={`/challenges/${challengeId}/posts`}>Participants Posts</Link>
            </footer>
        </article>
        
    )
}

export default ChallengeDetails