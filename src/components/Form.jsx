import {useState} from "react"

const Form = () => {

    const [course, setCourse] = useState("")
    const [desc, setDesc] = useState("")
    const [country, setCountry] = useState("")
    const [agreement, setAgreement] = useState(false)
    const [gender, setGender] = useState("")


    const handleChange = (event) => {
        if(event.target.name === "course"){
            setCourse(event.target.value);
        }else if(event.target.name === 'desc'){
            setDesc(event.target.value)
        }else if(event.target.name === 'country'){
            setCountry(event.target.value)
        }else if(event.target.name === 'agreement'){
            setAgreement(event.target.checked)
        }else if(event.target.name === 'gender'){
            setGender(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(course)
        console.log(desc)
        console.log(country)
        console.log(agreement)
        console.log(gender)
    }

    console.log(gender)

    return(
        <div className="pt-2  grid lg:grid-cols-12">

            <hr className=" lg:col-span-12"/>

            <h2 className="py-4 font-bold text-2xl lg:col-span-12"><u><center>React Forms</center></u></h2>

            <form onSubmit={handleSubmit} className="col-span-8  col-start-3 grid">

                <div className="form-floating flex items-center">
                    <input name="course" id="course" value={course} onChange={handleChange} className="border border-slate-300 rounded-sm form-control"/>
                    <label htmlFor="course">Course:</label>
                </div>

                <div className="form-floating flex items-center">
                    <textarea name="desc" id="desc" value={desc} onChange={handleChange} className="border border-slate-300 my-3 form-control"></textarea>
                    <label htmlFor="desc">Description:</label>
                </div>

                <div className="form-floating2 flex items-center">
                    <select name="country" value={country} onChange={handleChange} className="border border-slate-300 mb-5">
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                <div className="form-floating2 flex items-center">
                    <input type="checkbox" name="agreement" checked={agreement} onChange={handleChange} className="mb-5" />
                </div>

                <div className="form-floating2 flex items-center">
                    <input type="radio" name="gender" value="male" onChange={handleChange} /><br />                
                    <input type="radio" name="gender" value="female" onChange={handleChange} /> <br />               
                    <input type="radio" name="gender" value="others" onChange={handleChange} /> <br /> 
                </div>


                <input id="submit" type="submit" value="Save" className="my-5 bg-yellow-600 hover:bg-yellow-800 text-white" />              

            </form>

        </div>
    )
}

export default Form;