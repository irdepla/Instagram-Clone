import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../config/env.config";
import { PostInterface } from "../../interfaces/HomeInterface";
import { getHomePosts } from "../../service/post.service";

const Home = () => {



    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPosts(){
            const posts  = await getHomePosts()
            console.log(posts);
            setPosts(posts)
        }
        fetchPosts()
    }, [])

    return (
        <>
        <h1>Welcome to homePage</h1>

        {
            posts?.map((post: PostInterface) => (
                <div className="flex flex-col" key={post.id}>
                    <img src={ SERVER_BASE_URL + post.mediaUrl} alt="" />
                    <p>{post.description}</p>
                </div>
            ))
        }
         </>      
    );
}
export default Home;

