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

        <div className="pt-2 grid lg:grid-cols-12">

            <hr className=" lg:col-span-12"/>

            <h2 className=" lg:col-span-12"><center>Registration Form</center></h2>

            <form onSubmit={handleSubmit} className="lg:col-span-8  lg:col-start-3 grid">
                
                <div className="form-floating flex items-center">
                    <input type="text" id="name" name="name" value={data.name} onChange={handleChange} className="form-control" placeholder="Name" /><br />
                    <label htmlFor="name">Name:</label>
                </div> 

                <div className="form-floating flex items-center">   
                    <input type="email" id="email" name="email" value={data.email} onChange={handleChange} className="form-control" placeholder="Email" /><br />
                    <label htmlFor="email">Email:</label>
                </div>

                <div className="form-floating flex items-center">
                    <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="form-control" placeholder="Password: " /><br />
                    <label htmlFor="password">Password:</label>
                </div>
                
                <div className="form-floating flex items-center">
                    <input type="password" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm Password" /><br />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                </div>        

                <div className="form-control2 flex items-center">
                    <label >Country:</label>
                    <select name="country" value={data.country} onChange={handleChange} className=" ml-3 border border-slate-300">
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select> <br />
                </div>

                <div className="form-control2">
                    <p className="my-2 text-lg font-bold">Gender:</p>
                    <label className="inline-block min-w-14">Male</label>
                    <input type="radio" name="gender" value='male' onChange={handleChange} className="border border-slate-400 ml-3" /><br />    
                    <label className="inline-block min-w-14 mt-3">Female</label>
                    <input type="radio" name="gender" value='female' onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />    
                    <label className="inline-block min-w-14 mt-3">Others</label>
                    <input type="radio" name="gender" value='others' onChange={handleChange} className="border border-slate-400 ml-3 mt-3" /><br />    
                </div>    

                <div className="form-control2">
                    <label>Agreement:</label>
                    <input type="checkbox" name="agreement" checked={data.agreement} onChange={handleChange} className="border border-slate-400 ml-3" /><br />
                </div>

                <input id="submit" type="submit" value="Save" className="my-5 bg-green-600 hover:bg-green-800 text-white" />              

                
            </form>

        </div>
    )
}

export default RegistrationForm;