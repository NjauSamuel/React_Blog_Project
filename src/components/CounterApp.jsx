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

            <p className="py-3"><u>Counter-App : </u></p>

            {counter > 0 ? <button onClick={handleSubtract}>-</button> :  <button>-</button>}
            <span>{counter}</span>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default CounterApp;