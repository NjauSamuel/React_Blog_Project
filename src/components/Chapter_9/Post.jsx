import axios from "axios"
import { useEffect, useState } from "react"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            async function fetchPosts(){
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data.slice(0, 4))
                console.log(response)
            }

            fetchPosts()
        }, []
    )

    return(

        <div className="mt-6">
            <hr />

            <h2><u>4. Fetching Data From an API</u></h2>

            <p id="paragraph-like">In this example, we'll fetch data from an API with the help of  
                <b> Axios</b> library from the API enpoint: <b>https://jsonplaceholder.typicode.com/posts</b>. 
            </p>

            <h3 className="font-bold text-xl my-3 underline underline-offset-2">Posts List:</h3>

            {posts.map(
                (post) => (
                    <div key={post.id}>
                        <h4 className="font-bold">{post.title}</h4>
                        <p>{post.body}</p>
                        <hr className="border-black my-4"/>
                    </div>
                )
            )}
        </div>
    )
}

export default Posts