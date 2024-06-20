import { useState } from "react";

const HoverCounter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(oldValue => oldValue + 1)
    }

    return(
        <h3 onMouseOver={handleIncrement} className="bg-green-200" id="button-like">
                Hovered {counter} Times!
        </h3>    
    )
}

export default HoverCounter;