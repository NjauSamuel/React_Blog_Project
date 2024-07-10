import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="primary-link">
            {/* <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}

            {/* The React-Router-Dom provides us with `NavLink` component, which knows
             whether or not if the current link is the active one.
            
             Instead of the above Normal `Link` component, we'll use the 
             `NavLink` component below: 
            */}
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/posts">Post</NavLink>
            <NavLink to="/products">Product</NavLink>

            {/* The advantage of the link above is that the links now have an active class
             on the browser which can be styled to indicate the active Link. 
            */}
        </nav>
    )
}

export default NavBar

