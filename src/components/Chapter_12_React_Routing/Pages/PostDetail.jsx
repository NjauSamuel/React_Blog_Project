import { useParams } from "react-router-dom";

const PostDetail = () => {

    const params = useParams();

    const PostId = params.postId

    console.log(params)

    return(

        <div>
            <h2>Post Details</h2>

            <p>This is post: {PostId}</p>
        </div>

    )
}

export default PostDetail;