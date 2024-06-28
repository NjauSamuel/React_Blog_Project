import { useState, useEffect } from "react";

const Timer = () => {

    const [timer, setTimer] = useState(new Date())

    useEffect(() =>{
        setInterval(() => {
            setTimer(new Date())
        }, 1000)
    }, [])

    return(

        <div className="mt-6">
            <hr/>

            <h2><u>2. Timer Example</u></h2>

            <p id="button-like" className="bg-orange-500 font-bold text-white">{timer.toLocaleTimeString()}</p>
        </div>
    )
}

export default Timer;