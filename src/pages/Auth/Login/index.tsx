import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { login } from "../../../service/auth.service";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
        const {token} = data
        localStorage.setItem("token", token)
        toast.success("Login successful")
        navigate("/home")
    },
    onError: (error: AxiosError) => {
        toast.error(error?.message || "Xatolik yuz berdi. Qaytadan urinib ko'ring")
    }
  });

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.target as unknown as {
      name: string;
      value: string;
    };
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(formData);
  }

  return (
    <>



<div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white border border-gray-300 rounded-lg">
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="Instagram Logo"
            className="h-16"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="login"
              value={formData.login}
              onChange={handleChange}
              placeholder="Phone number, username, or email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
          <a
            href="#"
            className="text-xs text-blue-500 hover:text-blue-600"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 w-full py-4 text-center bg-white border-t border-gray-300">
        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="/register"  className="font-semibold text-blue-500 hover:text-blue-600">
            Sign up
          </a>
        </p>
      </div>

      <ToastContainer />
    </div>
    </>
  );
};

export default Login;


















// import React, { ChangeEvent, useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// // import { login } from "../../service/auth.service"; // Your login API service
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: login,
//     onSuccess: (data) => {
//       const { token } = data; // Assuming the API returns a token
//       localStorage.setItem("token", token); // Store the token in localStorage
//       toast.success("Login successful!");
//       navigate("/dashboard"); // Redirect to the dashboard or protected route
//     },
//     onError: (error: Error) => {
//       toast.error(error?.message || "Login failed. Please try again.");
//     },
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     mutation.mutate(formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-sm p-8 space-y-6 bg-white border border-gray-300 rounded-lg">
//         {/* Instagram Logo */}
//         <div className="flex justify-center">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
//             alt="Instagram Logo"
//             className="h-16"
//           />
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Phone number, username, or email"
//               className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={mutation.isLoading}
//             className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {mutation.isLoading ? "Logging in..." : "Log In"}
//           </button>
//         </form>

//         {/* Separator */}
//         <div className="flex items-center justify-center space-x-2">
//           <div className="flex-1 h-px bg-gray-300"></div>
//           <span className="text-sm text-gray-500">OR</span>
//           <div className="flex-1 h-px bg-gray-300"></div>
//         </div>

//         {/* Forgot Password Link */}
//         <div className="text-center">
//           <a
//             href="#"
//             className="text-xs text-blue-500 hover:text-blue-600"
//           >
//             Forgot password?
//           </a>
//         </div>
//       </div>

//       {/* Sign Up Section */}
//       <div className="fixed bottom-0 w-full py-4 text-center bg-white border-t border-gray-300">
//         <p className="text-sm text-gray-700">
//           Don't have an account?{" "}
//           <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
//             Sign up
//           </a>
//         </p>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;