import { useState, useEffect } from "react";

const UseEffectCom = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(setCount => setCount + 1)
    }

    useEffect(() => {
        console.log("Call this function in every Render. ")
    })

    useEffect(() => {
        console.log("Call this function in the initial Render. ")
    }, [])

    useEffect(() => {
        console.log("Call this function when dependancy changes. ")
    }, [counter])

    return(

        <div className="mt-6">
            <hr/>
            <h2><u>1. The useEffect Hook</u></h2>

            <p id="paragraph-like">
                We usually manage all kinds of sideffects using the use effect Hook. 
            </p>

            <p id="paragraph-like">
                The <b>useEffect</b> function normally accepts two parameters, the first is 
                a call back function and the second is an array.<br/><br/>

                When you leave out the second parameter, it will run the call back function on 
                every render. <br/><br/>

                When you provide the second parameter as an empty array, it will call the callback 
                function only during the initial render.<br/><br/>

                When you provide a value inside of the array in the second parameter (The dependency)
                , the useEffect  function will run when that dependency's value changes. 
            </p>

            <b>useEffect Example: </b>

            <button className="bg-slate-500 text-white hover:bg-slate-700" onClick={handleClick}>
                Click {counter}
            </button>

            <p>Check Console 👉</p>
            
        </div>
    )
}

export default UseEffectCom;