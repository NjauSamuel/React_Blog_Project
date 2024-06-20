import withCounter from "./HOC/withCounter";

const HoverCounter = ({counter, handleIncrement}) => {

    return(
        <h3 onMouseOver={handleIncrement} className="bg-green-200" id="button-like">
                Hovered {counter} Times!
        </h3>    
    )
}

export default withCounter(HoverCounter);