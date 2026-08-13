import { Link } from "react-router"
import compass from "../assets/compass.JPG"


const Nav = (props) => {

    const handleSignOut = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }

    return (
        <nav>
           
            <Link className="nav-brand" to="/"> <img src={compass} width= "80px"/> Compass</Link>
            { props.user ? (
                <ul>
                    <li>Welcome, {props.user.username}!</li>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li>
                        <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/challenges">Challenges</Link>
                    </li>
                </ul>
            ) : (
            <ul>
                <li>
                    <Link to='/'>Home</Link>  
                </li>
                <li>
                    <Link to='/auth/sign-up'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/auth/sign-in'>Sign In</Link>
                </li>
            </ul>
            ) }

        </nav>
    )
}

export default Nav