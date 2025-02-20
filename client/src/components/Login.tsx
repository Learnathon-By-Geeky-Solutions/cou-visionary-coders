/** @format */
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../Hooks/contextApi/UserContext";
import { IFormInput } from "../interfaces/Login.interface";

const Login: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is null");
  }

  const { loginUser, signInWithGoogle } = authContext;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data:any) => {
    setLoading(true);
    try {
      const result = await loginUser(data.email, data.password);
      const user = result.user;

      const response = await fetch("https://halalbondhon-server.vercel.app/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: user.email, password: data.password }),
      });

      const responseData = await response.json();
      if(responseData.success){
        toast.success("User login sucessfully");
        navigate('/profile')
      }
      else{
        toast.error(responseData.error);
      }

    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials. Try again.");
    }finally {
      setLoading(false);
    }
  };

  // const handleGoogle = async () => {
  // try {
  // const result = await signInWithGoogle();
  // const user = result.user;

  // const response = await fetch(
  // "http://localhost:3000/api/login/google",
  // {
  // method: "POST",
  // headers: { "content-type": "application/json" },
  // body: JSON.stringify({ email: user.email }),
  // }
  // );

  // const responseData = await response.json();
  // console.log(responseData)
  // } catch (error) {
  // console.error("Google login error:", error);
  // toast.error("Google login failed. Try again.");
  // }
  // };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 shadow-md rounded-md border border-pink-600 m-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img
          className="mx-auto h-32 w-auto"
          src="https://cdn.dribbble.com/users/756147/screenshots/2494603/unlock_animaiton.gif"
          alt="Login"
        />
        <h2 className="mt-5 heading">Log in</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              {...register("email", { required: "Email is required" })}
              type="email"
              autoComplete="email"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                {...register("password", { required: "Password is required" })}
                type="password"
                autoComplete="current-password"
                className="block w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 font-bold" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 p-2 rounded-md shadow-md hover:bg-gray-100">
          <img
            src="https://imgs.search.brave.com/0dfkmCFWC2zrjWCenB_rDnfa_wKBmKDmxG4qSB78iQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi01MTJ4NTEy/LXRxYzllbDNyLnBu/Zw"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-sm md:text-lg text-gray-500">
          Not a member?
          <a
            href="/signup"
            className="text-indigo-700 hover:text-indigo-400 font-bold px-2">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
