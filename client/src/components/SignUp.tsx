/** @format */

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../Hooks/contextApi/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { IFormData, UserProfile } from "../interfaces/Signup.interface";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is null");
  }

  const { createUser, updateUserProfile } = authContext;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: IFormData) => {
    setLoading(true);
    try {
      //simulate a 2 second delay to submit the form
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });

      createUser(data.email, data.password)
        .then((result: { user: any }) => {
          const user = result.user;
          toast.success("user created successfully");
        })
        .then(() => {
          handleUpdateUserProfile(data.username);

          saveUser(
            data.username,
            data.phoneNumber,
            data.email,
            data.password,
            data.confirmPassword
          );

        })
        .catch((error: any) => {
          toast.error("Error creating user. Please try again.");
        });
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserProfile = (name: string) => {
    const profile: UserProfile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error: any) => console.error(error));
  };

  const saveUser = async (
    username: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const user = {
      username,
      phoneNumber,
      email,
      password,
    };
    const response = await fetch("https://halalbondhon-server.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const responseData = await response.json();
    if(responseData.success){
      navigate("/login");
    }
    else{
      toast.error(responseData.message)
    }
  };

  // Watch the password field
  const password = watch("password");

  return (
    <div className="flex flex-col items-center justify-center bg-sky-50 py-8 px-2">
      <h2 className="heading mb-4 text-2xl font-bold">Create Account</h2>

      {/* Email/Password Sign Up Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-pink-600 p-6 md:px-20 m-2 rounded-md border shadow-lg flex flex-col gap-2 w-full sm:w-1/3">
        <input
          type="text"
          {...register("username", { required: "This field is required" })}
          placeholder="Enter Your Name"
          className="form-input p-2 w-full"
        />
        {errors.username && (
          <span className="text-red-500">
            {errors.username.message && String(errors.username.message)}
          </span>
        )}

        <input
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter Your Email"
          className="form-input p-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500">
            {errors.email.message && String(errors.email.message)}
          </span>
        )}

        <input
          type="tel"
          {...register("phoneNumber", {
            required: "This field is required",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Invalid phone number",
            },
          })}
          placeholder="Enter Your Phone Number"
          className="form-input p-2 w-full"
        />
        {errors.phoneNumber && (
          <span className="text-red-500">
            {errors.phoneNumber && String(errors.phoneNumber.message)}
          </span>
        )}

        {/* Password */}
        <div className="relative w-full">
          <input
            type="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Enter Your Password"
            className="form-input p-2 w-full"
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message && String(errors.password.message)}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative w-full">
          <input
            type="password"
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value:any) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Confirm Your Password"
            className="form-input p-2 w-full"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword &&
                errors.confirmPassword.message &&
                String(errors.confirmPassword.message)}
            </span>
          )}
        </div>

        {/* show login option */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

        <button
          type="submit"
          className="btn-primary mx-auto mt-2"
          disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
