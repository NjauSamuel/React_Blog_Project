import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return(
        <div>
            <h3 className="text-green-500 font-bold text-center">Order Confirmation Successful</h3>

            <button onClick={handleNavigate} className="border-slate-400 hover:bg-slate-300">Go Back</button>
        </div>
        
    )
}

export default OrderConfirmation;