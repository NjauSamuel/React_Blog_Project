import { useState } from "react";

const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    const handleSubtract = () => {
        setCounter(oldCounter => oldCounter - 1)
    }
    const handleAdd = () => {
        setCounter(oldCounter => oldCounter + 1)
    }

    return(
        <div className="pt-2">
            <hr />

            <h2><u>Counter-App : </u></h2>

            {counter > 0 ? <button onClick={handleSubtract} className="bg-slate-50">-</button> :  <button className="bg-slate-50">-</button>}
            <span className="mx-1">{counter}</span>
            <button onClick={handleAdd} className="bg-slate-50">+</button>
        </div>
    )
}

export default CounterApp;