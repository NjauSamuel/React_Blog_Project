import axios from "axios"
import { useEffect, useReducer } from "react"

const initialState = {
    loading: true,
    posts: [],
    error: ""
}

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

const PostListWithReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(
        () => {
            async function fetchPosts(){
                try{
                    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                    dispatch({type: "SUCCESS", data: response.data.slice(0, 2)})
                }catch(error){
                    dispatch({type: "ERROR", message: error.message})
                }
            }

            fetchPosts()
        }, []
    )

    return(

        <div className="mt-6">
            <hr />

            <h2><u>10. Improved Fetching Data From an API with useReducer Hook</u></h2>

            <p id="paragraph-like">
                This is similar to <b>9</b> above, but instead of using <b>useEffect</b>, we'll use 
                 the <b>useReducer</b> hook.  <br /><br />

                In this example, we'll fetch data from an API with the help of  
                <b> Axios</b> library from the API enpoint: 
                <b>https://jsonplaceholder.typicode.com/posts</b> with the help of 
                 the <b>useReducer</b> hook. <br/><br/>
            </p>

            <h3 className="font-bold text-xl my-3 underline underline-offset-2">Post List: </h3>

            {state.loading ? 
                (<h3 className="font-bold text-xl my-3 text-green-600">Loading...</h3> )
                
                : state.error ? <h3 className="text-red-600 font-bold ml-5">Error: {state.error}!</h3> 
                
                : (
                    state.posts.map(
                    (post) => (
                        <div key={post.id}>
                            <h4 className="font-bold pl-5">{post.title}</h4>
                            <p className="pl-5">{post.body}</p>
                            <hr className="border-black my-4"/>
                        </div>
                    )
                    )
                )
            }
            

        </div>
    )
}

export default PostListWithReducer