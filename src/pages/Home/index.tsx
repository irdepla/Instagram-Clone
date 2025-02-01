import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../config/env.config";
import { PostInterface } from "../../interfaces/HomeInterface";
import { getHomePosts } from "../../service/post.service";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";

const Home = () => {



    const [posts, setPosts] = useState([])
    const mutation = useMutation({
        mutationFn: getHomePosts,
        onSuccess: (data: any) => {
          setPosts(data)
        },
        onError: (error: AxiosError) => {
          toast.error(
            error?.message || "Xatolik yuz berdi. Qaytadan urinib ko'ring"
          );
        },
      });

      useEffect(() => {
        mutation.mutate(undefined)
      }, [])

    return (
        <>
        <h1>Welcome to homePage</h1>

        {
            posts?.map((post: any) => (
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

