import ComponentThree from "./ComponentThree";

const ComponentTwo = ({course}) => {
    return(
        <div>
            <p id="paragraph-like">Component Two</p>

            <ComponentThree course={course}/>
        </div>
    )
}

export default ComponentTwo;