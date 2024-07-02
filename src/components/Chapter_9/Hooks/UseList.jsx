import axios from "axios"
import { useEffect, useReducer } from "react"

const reducer = (state, action) => {
    switch(action.type){
        case "SUCCESS":
            return{
                loading: false,
                posts: action.data,
                error: ""
            }

        case "ERROR":
            return{
                loading: false,
                posts: [],
                error: action.message
            }

        default:
            state
    }
}

const UseList = (url, initialState) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(
        () => {
            async function fetchPosts(){
                try{
                    const response = await axios.get(url)
                    dispatch({type: "SUCCESS", data: response.data.slice(0, 2)})
                }catch(error){
                    dispatch({type: "ERROR", message: error.message})
                }
            }

            fetchPosts()
        }, [url]
    )

    return state
    
}

export default UseList