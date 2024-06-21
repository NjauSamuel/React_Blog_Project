const HoverCounterByRenderProps = ({counter, handleIncrement}) => {
    
    return (
        <h3 onMouseOver={handleIncrement} className="bg-yellow-200" id="button-like">
            Hovered {counter} Times!
        </h3> 
    )

}

export default HoverCounterByRenderProps;