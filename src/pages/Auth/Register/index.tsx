import { ChangeEvent, FormEvent, useState } from "react";
import { register } from "../../../service/auth.service";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";


const Register = () => {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
    birthDate: "",
    gender: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn:register,
    onSuccess: (data: any) => {
      dispatch(setUser(data))
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
        navigate("/")
    },
    onError: (error: AxiosError) => {
        toast.error(((error?.response?.data) as unknown as {error: string}).error || "Xatolik yuz berdi")
    }
  });
  

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.target as unknown as {
      name: string;
      value: string;
    };
    setformData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutation.mutate(formData);
  }


  return (
    <>
      <div className="w-[350px] border m-auto mt-[60px]">
      <ToastContainer />
        <form
          onSubmit={handleSubmit}
          action=""
        >
            <div className="flex p-2 flex-col gap-8">
            <div className="border border-black border-solid p-1 active:outline-none outline-none">
          <input
          className="outline-none"
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Mobile Number or Email"
          />
          </div>
          <div className="border border-black border-solid p-1 active:outline-none outline-none">
          <input
          className="outline-none"
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          </div>
          <div>
          <input
          className="outline-none border-black p-1 w-full border border-solid"
            onChange={handleChange}
            value={formData.birthDate}
            type="date"
            name="birthDate"
            placeholder="Birth Date"
          />
          </div>
          <div className="border border-black border-solid p-1 active:outline-none outline-none">
          <input
          className="outline-none"
          name="username"
            onChange={handleChange}
            value={formData.username}
            type="text"
            placeholder="Username"
          />
          </div>
          <div className="border border-black border-solid p-1 active:outline-none outline-none">
          <select
            value={formData.gender}
            onChange={handleChange}
            name="gender"
            required
            id=""
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          </div>
          <button disabled={mutation.status == "pending"} type="submit" className="px-16 rounded disabled:bg-slate-400  bg-[#0095f6] mx-auto ">
          {mutation.status == "pending" ? "Registering..." : "Sign Up"}
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
