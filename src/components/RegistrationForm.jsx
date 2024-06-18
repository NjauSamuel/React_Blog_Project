import { useState } from "react";

const RegistrationForm = () => {

    const [data, setData] = useState({
        name: '', 
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        gender: '',
        agreement: false
    })

    // const handleChange = (e) => {
    //     if(e.target.name === 'name'){
    //         setData((oldData) => ({...oldData, name: e.target.value}))
    //     }else if(e.target.name === 'email'){
    //         setData((oldData) => ({...oldData, email: e.target.value}))
    //     }
    // }
    const handleChange = (e) => {
        if(e.target.type === "checkbox"){
            setData((oldData) => ({...oldData, [e.target.name]: e.target.checked}))
        }else {
            setData((oldData) => ({...oldData, [e.target.name]: e.target.value}))     
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    console.log(data)


    return(

        <div className="pt-2">

            <hr />

            <h2 className="my-4 font-black text-xl"><u>Registration Form</u></h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} className="border border-slate-400 ml-3" /><br />
                    
                    <label className="mt-3">Email:</label>
                    <input type="email" name="email" value={data.email} onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />


                    <label className="mt-3">Password:</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />

                    <label className="mt-3">Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />
                    
                    <label className="mt-3">Country:</label>
                    <select name="country" value={data.country} onChange={handleChange} className="mt-3 ml-3">
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select> <br />

                    <p className="my-2 text-lg font-bold">Gender:</p>
                    <label>Male</label>
                    <input type="radio" name="gender" value='male' onChange={handleChange} className="border border-slate-400 ml-3" /><br />    
                    <label className="mt-3">Female</label>
                    <input type="radio" name="gender" value='female' onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />    
                    <label className="mt-3">Others</label>
                    <input type="radio" name="gender" value='others' onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />    
                    
                    <label className="mt-3">Agreement:</label>
                    <input type="checkbox" name="agreement" checked={data.agreement} onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />

                    <input id="submit" type="submit" value="Save" className="my-5 bg-green-600 hover:bg-green-800 text-white" />              

                </div>
            </form>

        </div>
    )
}

export default RegistrationForm;