const ClickCounterByRenderProps = ({counter, handleIncrement}) => {
    
    return <button onClick={handleIncrement} className="bg-orange-500 hover:bg-orange-600 text-white">Clicked {counter} Times! </button>

}

export default ClickCounterByRenderProps;