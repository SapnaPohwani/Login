import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const validUser = {
  username: "Sapna",
  email: "sapnapohwani@gmail.com",
  password: "sapna1234",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { username, email, password } = data;
    if (
      username === validUser.username &&
      email === validUser.email &&
      password === validUser.password
    ) {
      alert("Login successful!");
      reset();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-end pr-10"
      style={{ backgroundImage: "url('./src/assets/login.jpg')" }}
    >
      <div className="w-full max-w-md mr-12">
        <div className="bg-[#f39a86] rounded-2xl px-10 py-10 shadow-[12px_12px_200px_rgba(1,1,1,3)]">
          <h2 className="text-2xl font-bold text-center flex-wrap text-[#2d2d61] mb-8">
            LOGIN TO YOUR ACCOUNT
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-[#2d2d61] mb-1">Username :</label>
              <input
                type="text"
                {...register("username")}
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none shadow"
              />
              <p className="text-red-500 text-sm">{errors.username?.message}</p>
            </div>

            <div>
              <label className="block text-[#2d2d61] mb-1">
                Email Address :
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none shadow"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block text-[#2d2d61] mb-1">Password :</label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none shadow"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
          </form>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className=" font-bold text-sm ml-12 text-blue-500">
            Don’t have an account?{" "}
            <span className="underline cursor-pointer">Sign Up now</span>
          </p>
          <button
            onClick={handleSubmit(onSubmit)}
            className="px-6 py-2 bg-white mr-8 text-[#2d2d61] font-bold rounded-full hover:bg-gray-200"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
