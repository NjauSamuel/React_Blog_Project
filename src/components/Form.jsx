import {useState} from "react"

const Form = () => {

    const [course, setCourse] = useState("")
    const [desc, setDesc] = useState()

    const handleChange = (event) => {
        if(event.target.name === "course"){
            setCourse(event.target.value);
        }else if(event.target.name === 'desc'){
            setDesc(event.target.value)
        }
    }

    console.log(course)

    return(
        <div className="pt-2">

            <hr />

            <h2 className="py-4 font-bold text-2xl"><u><center>React Forms</center></u></h2>

            <form>
                <input name="course" value={course} onChange={handleChange} className="border border-slate-300 rounded-sm"/>

                <br />

                <textarea name="desc" value={desc} className="border border-slate-300 my-3"></textarea>
                
            </form>

        </div>
    )
}

export default Form;