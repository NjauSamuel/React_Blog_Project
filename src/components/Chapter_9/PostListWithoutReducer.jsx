import axios from "axios"
import { useEffect, useState } from "react"

const PostListWithoutReducer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            async function fetchPosts(){
                try{
                    setLoading(true)
                    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                    setPosts(response.data.slice(0, 3))
                    setLoading(false)
                }catch(error){
                    setError(error.message)
                    setLoading(false)
                }
            }

            fetchPosts()
        }, []
    )

    return(

        <div className="mt-6">
            <hr />

            <h2><u>9. Improved Fetching Data From an API using useReducer Hook</u></h2>

            <p id="paragraph-like">

                This is an improvement from the previous fetch from API since it has <b>error handling</b>, 
                and an improved user experience since it indicates the <b>loading</b> state. <br /><br />

                In this example, we'll fetch data from an API with the help of  
                <b> Axios</b> library from the API enpoint: <b>https://jsonplaceholder.typicode.com/posts</b>. <br/><br/>

                We'll use <b>useReducer</b> hook instead of the previous useEffect. 
            </p>

            <h3 className="font-bold text-xl my-3 underline underline-offset-2">Post List: </h3>

            {loading ? 
                (<h3 className="font-bold text-xl my-3 text-green-600">Loading...</h3> )
                
                : error ? <h3 className="text-red-600 font-bold ml-5">Error: {error}!</h3> 
                
                : (
                    posts.map(
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

export default PostListWithoutReducer