import CourseContext from "./context/courseContext";

const ComponentThree = ({course}) =>{
    return(
        <div>
            <p id="paragraph-like">Component Three</p>

            <p id="paragraph-like"><b>Props Drilling: </b>Course: {course}</p>

            <CourseContext.Consumer>
                {(value) => <p id="paragraph-like"><b>Context API: </b>Course: {value.courses}</p>}
            </CourseContext.Consumer>

        </div>
    )
}

export default ComponentThree;