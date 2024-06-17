import {useState} from "react"

const ConditionalRendering = () => {

    const [course, setCourse] = useState("vue")

    return (
        <div>
            <p className="pt-3 pb-2 "><u>Conditional Rendering</u></p>
            {/* expression ? true-statement : false-statement */}
            {course === "react" ? (<p>This is react course</p>) : course === "vue" ? (<p>This is vue course</p>) : null}
        </div>
    )
}

export default ConditionalRendering;