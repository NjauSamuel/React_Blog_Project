import { useState, useEffect } from "react"

const CleanUpInterval = () => {

    const [toggle, setToggle] = useState(true)

    return(
        <div className="mt-6">
            <hr />
            
            <h2><u>3. Clean Up Interval</u></h2>

            <p id="paragraph-like">
                For the Timer example above, when we want to close that timer component, it will 
                still run in the background (It is resource hungry) since the timer function has 
                been set to run after every 1 second. To bypass this behaviour, a clean up function 
                can be utilized to stop the excecution of the timer once the Timer component is 
                closed.<br/><br/>

                I.E., Before closing the Component we should close the timer. 
            </p>

            <b className="my-3">Example: </b><br/>

            <button onClick={() => setToggle(!toggle)} id="button-like" className="bg-blue-700 hover:bg-blue-900 text-white font-bold">
                Toggle
            </button>

            {toggle ? <Timer/> : <CounterApp/>}

        </div>
    )
}

export default CleanUpInterval



const Timer = () => {

    const [timer, setTimer] = useState(new Date())

    const interval =  useEffect(() =>{
            setInterval(() => {
                setTimer(new Date())
            }, 1000);

            return() => {
                console.log("Cleanup Function. ")
                clearInterval(interval);
            };
        }, []
    )

    return(

        <div>
            <p id="button-like" className="bg-orange-500 font-bold text-white">{timer.toLocaleTimeString()}</p>
        </div>
    )
}

const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    const handleSubtract = () => {
        setCounter(oldCounter => oldCounter - 1)
    }
    const handleAdd = () => {
        setCounter(oldCounter => oldCounter + 1)
    }

    return(
        <div>

            {counter > 0 ? <button onClick={handleSubtract} className="bg-slate-300 hover:bg-slate-500">-</button> :  <button className="bg-slate-300 hover:bg-slate-500">-</button>}
            <span className="mx-1">{counter}</span>
            <button onClick={handleAdd} className="bg-slate-300 hover:bg-slate-500">+</button>
        </div>
    )
}