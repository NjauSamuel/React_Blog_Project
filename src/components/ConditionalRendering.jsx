import {useState} from "react"

const ConditionalRendering = () => {

    const [course, setCourse] = useState("vue")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => { setIsLoggedIn(true) }
    const handleLogout = () => { setIsLoggedIn(false) }

    let text = null
    isLoggedIn ? (text = "Welcome user!") : (text = "Click the login button to login!")

    return (
        <div>
            <p className="pt-3 pb-2 "><u>Conditional Rendering</u></p>
            {/* expression ? true-statement : false-statement */}
            {course === "react" ? (<p>This is react course</p>) : course === "vue" ? (<p>This is vue course</p>) : null}

            <p className="pt-2">{text}</p>
            {isLoggedIn === false ? <button className="bg-green-100 hover:bg-green-200 font-bold" onClick={handleLogin}>Login</button> : <button className="bg-red-500 hover:bg-red-700 text-white font-bold" onClick={handleLogout}>Logout</button>}
        </div>
    )
}

export default ConditionalRendering;