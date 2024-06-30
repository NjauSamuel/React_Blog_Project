import { useState, useRef, useEffect } from "react"


const UseRef = () => {
    const [input, setInput] = useState({name: "", email: "", password: ""})

    const inputRef = useRef(null)

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }, []) //After the initial render, this use effect function should call and focus on the first element, 
    //(That's the need for the empty array. since the useEffect can call after initial render )

    const handleChange = (e) =>{
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return(
        <div className="mt-6 grid grid-cols-12">
            <hr className="col-span-12"/>
            <h2 className="col-span-12">6. useRef Hook</h2>            

            <div className="col-span-8  col-start-3 grid">
                
                <div className="form-floating flex items-center">
                    <input ref={inputRef} type="text" id="name" name="name" value={input.name} onChange={handleChange} className="form-control" placeholder="Name" /><br />
                    <label htmlFor="name">Name:</label>
                </div> 

                <div className="form-floating flex items-center">   
                    <input type="email" id="email" name="email" value={input.email} onChange={handleChange} className="form-control" placeholder="Email" /><br />
                    <label htmlFor="email">Email:</label>
                </div>

                <div className="form-floating flex items-center">
                    <input type="password" id="password" name="password" value={input.password} onChange={handleChange} className="form-control" placeholder="Password: " /><br />
                    <label htmlFor="password">Password:</label>
                </div>

            </div>

            <p id="paragraph-like" className="col-span-12 text-black">
                In this example, I want the first element <b>(Input box)</b> autofocused by default on the initial render. <br/><br/>
                This can be done with dom operations which is usually frowned upon. <br/><br/>
                But luckily, react provides us with the <b>useRef</b> hook to work with DOM operations. <br/><br/>
                After the initial render, a <b>useEffect</b> hook should call a function <b>(useRef)</b> to focus on the first element, 
                thus we passed an empty array as the second parameter to make sure the useEffect hook only calls 
                in the initial render. 
            </p>

        </div>


    )
}

export default UseRef