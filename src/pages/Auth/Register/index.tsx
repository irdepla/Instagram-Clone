import { register1 } from "../../../service/auth.service";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterBody } from "../../../interfaces/AuthInterface";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register1,
    onSuccess: (data: any) => {
      dispatch(setUser(data));
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz");
      navigate("/");
    },
    onError: (error: AxiosError) => {
      toast.error(
        (error?.response?.data as unknown as { error: string }).error ||
          "Xatolik yuz berdi"
      );
    },
  });

  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be longer than or equal to 6 characters"),
    birthDate: Yup.string().required("Birth Date is required"),
    username: Yup.string().required("Username is required"),
    gender: Yup.string().required("Choose your gender"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterBody) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div className="w-[350px] border m-auto mt-[60px]">
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="flex p-2 flex-col gap-8">
            <div className="border border-black border-solid p-1 active:outline-none outline-none">
              <input
                {...register("email")}
                className="outline-none"
                type="email"
                name="email"
                placeholder="Mobile Number or Email"
              />
              <p className="text-red-700 font-semibold">
                {errors.email && <p>{errors.email.message}</p>}
              </p>
            </div>
            <div className="border border-black border-solid p-1 active:outline-none outline-none">
              <input
                {...register("password")}
                className="outline-none"
                type="password"
                name="password"
                placeholder="Password"
              />
              <p className="text-red-700 font-semibold">
                {errors.password && <p>{errors.password.message}</p>}
              </p>
            </div>
            <div>
              <input
                {...register("birthDate")}
                className="outline-none border-black p-1 w-full border border-solid"
                type="date"
                name="birthDate"
                placeholder="Birth Date"
              />
              <p className="text-red-700 font-semibold">
                {errors.birthDate && <p>{errors.birthDate.message}</p>}
              </p>
            </div>
            <div className="border border-black border-solid p-1 active:outline-none outline-none">
              <input
                {...register("username")}
                className="outline-none"
                name="username"
                type="text"
                placeholder="Username"
              />
              <p className="text-red-700 font-semibold">
                {errors.username && <p>{errors.username.message}</p>}
              </p>
            </div>
            <div className="border border-black border-solid p-1 active:outline-none outline-none">
              <select
                {...register("gender")}
                name="gender"
                required
                id=""
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <p className="text-red-700 font-semibold">
                  {errors.gender && <p>{errors.gender.message}</p>}
                </p>
              </select>
            </div>
            <button
              disabled={mutation.status == "pending"}
              type="submit"
              className="px-16 rounded disabled:bg-slate-400  bg-[#0095f6] mx-auto "
            >
              {mutation.status == "pending" ? "Registering..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

