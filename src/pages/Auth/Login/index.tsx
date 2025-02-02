import { useMutation } from "@tanstack/react-query";
import { login1 } from "../../../service/auth.service";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginBody } from "../../../interfaces/AuthInterface";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: login1,
    onSuccess: (data: any) => {
      const { accessToken } = data;
      if (!accessToken) {
        toast.error("Access token not found in the response");
        return;
      }
      dispatch(setUser(data));
      toast.success("Login successful");
      navigate("/");
    },
    onError: (error: AxiosError) => {
      toast.error(
        error?.message || "Xatolik yuz berdi. Qaytadan urinib ko'ring"
      );
    },
  });

  function onSubmit(data: LoginBody) {
    console.log("my data is", data);
    mutation.mutate(data);
  }

  const schema = Yup.object({
    login: Yup.string()
      .required("Login required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password required")
      .min(6, "Password must be longer than or equal to 6 characters"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-sm p-8 space-y-6 bg-white border border-gray-300 rounded-lg">
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt="Instagram Logo"
              className="h-16"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
              {...register("login")}
                type="email"
                name="login"
                placeholder="Phone number, username, or email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-red-700 font-semibold">
                {errors.login && <p>{errors.login.message}</p>}
              </p>
            </div>
            <div>
              <input
              {...register("password")}
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-red-700 font-semibold">
                {errors.password && <p>{errors.password.message}</p>}
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {mutation.status == "pending" ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="text-center">
            <a href="#" className="text-xs text-blue-500 hover:text-blue-600">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="fixed bottom-0 w-full py-4 text-center bg-white border-t border-gray-300">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-blue-500 hover:text-blue-600"
            >
              Sign up
            </a>
          </p>
        </div>

      </div>
    </>
  );
};

export default Login;

