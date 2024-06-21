import {useState}  from "react"


const Counter = ({render}) => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(oldValue => oldValue + 1)
    }

    return render(counter, handleIncrement);
}

export default Counter;