import { useEffect, useState } from "react";
import { PostInterface } from "../../interfaces/HomeInterface";
import { getHomePosts } from "../../service/post.service";
import { useMutation } from "@tanstack/react-query"; 
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Loading from "../../components/Loading";
import Post from "../../components/Post";

const Home = () => {


  const [page, setPage] = useState(1)
    const [posts, setPosts] = useState<any[]>([])
    const mutation = useMutation({
        mutationFn: getHomePosts,
        onSuccess: (data: any) => {
          console.log("new data is", data);
          setPosts((prev: any[]) => [...prev, ...data])
        },
        onError: (error: AxiosError) => {
          toast.error(((error?.response?.data) as unknown as {error: string}).error || "Xatolik yuz berdi")
        },
      });

      useEffect(() => {
        mutation.mutate(page)
      }, [page])

      function handlePage(){
        setPage((prev) => ++prev)
      }

    return (
        <>

        <div className="border border-black border-solid w-full h-[84px]">
          <h1 className="text-center text-4xl">This is place for stories</h1>
        </div>

        <h1 className="text-center text-2xl font-semibold">Welcome to Homepage</h1>

        {
          mutation.status === "pending" ? (
            <Loading />
          ) : (
            posts?.map((post: PostInterface) => (
              <Post key={post.id} post={post} />
            ))
        )}
        <button onClick={handlePage} className="px-4 py-2 block m-auto bg-blue-500 rounded-md">Yana yuklash</button>
         </>      
    );
}
export default Home;

