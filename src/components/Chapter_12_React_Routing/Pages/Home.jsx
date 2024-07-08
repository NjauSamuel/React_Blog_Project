import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/order-confirmation")
    }

    return(
        <div>
            <h1>This is the Home Page</h1>

            <button onClick={handleNavigate} className="border border-slate-500 hover:bg-slate-300">Place Order</button>
        </div>
    )
}

export default Home