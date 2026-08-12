import { Link, Links, useParams } from "react-router"
import * as challengeService from "../services/challenges"
import * as postService from "../services/posts"
import { useEffect, useState } from "react"

const ChallengeDetails =(props)=>{
    const {challengeId} = useParams()
    const [challenge, setChallenge] = useState(null)
    const [userParticipant, setUserParticipant] = useState(false)
    const [userPost, setUserPost] = useState(false)

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

    const participantIds = challenge.participants.map((participant) => (
        participant._id
    ))

    const handleParticipate = async() => {
        try{
            await challengeService.addParticipant(challengeId)
            setUserParticipant(true)

        }catch(error){
            console.log(error)
        }
        
    }
    return(
        <article>
            <header>
                <h1>{challenge.title}</h1>
            </header>
            <span><h4>{challenge.text}</h4></span>
            <footer>
                {userParticipant || participantIds.includes(props.user._id) ? (
                    <form action={`/challenges/${challengeId}/posts/new`}>
                        <button type="submit"> Add a post </button>
                    </form>
                ) : (
                    <button onClick={handleParticipate}>Participate</button>                
                )}  
                <Link to={`/challenges/${challengeId}/posts`}> Participants Posts</Link>
            </footer>
        </article>
        
    )
}

export default ChallengeDetails
