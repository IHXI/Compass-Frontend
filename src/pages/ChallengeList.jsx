import { Link } from "react-router"
const ChallengeList =(props)=>{
    return(
        <main>
            {props.challenges.map((challenge) => (
                <Link key={challenge._id} to={`/challenges/${challenge._id}`}>
                    <article>
                        <header>
                            <h2>{challenge.title}</h2>
                            <p>{challenge.text}</p>
                        </header>
                    </article>
                </Link>
            ))}
        </main>
    )
}

export default ChallengeList