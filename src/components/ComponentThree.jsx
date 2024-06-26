import CourseContext from "./context/courseContext";
import { useContext } from "react";

const ComponentThree = ({course}) =>{

    const context = useContext(CourseContext)

    console.log(context)

    return(
        <div>
            <p id="paragraph-like">Component Three</p>

            <p id="paragraph-like"><b>Props Drilling: </b>Course: {course}</p>
            
            <p id="paragraph-like"><b>Context API: </b>Course: {context.courses}</p>

        </div>
    )
}

export default ComponentThree;