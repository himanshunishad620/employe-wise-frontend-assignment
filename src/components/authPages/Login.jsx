import { useFormik } from "formik";
import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import * as Yup from "yup";
import useAuthHook from "../../hook/useAuthHook";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};
export default function Login() {
  const {isAuthenticated}=useAuthHook()
  const navigate=useNavigate()
  if(isAuthenticated){
    toast.warn("Log out first!")
    return <Navigate to='/'/>
  }
  const {handleLogin,loading}=useAuthHook()
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleSubmit = async() => {
    if (checked) {
      localStorage.setItem("email", formik.values.email);
      localStorage.setItem("password", formik.values.password);
    }
     await handleLogin(formik.values)
     navigate('/')
  };
  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: handleSubmit,
  });
  return (
    <div className="w-full h-full flex ">
      {/* left side  */}
      <div className="hidden lg:flex justify-start pl-30  w-1/2  h-full bg-[url('D:/TEST/employe-wise-frontend-assignment/public/bg.svg')] bg-contain bg-cover">
        <img src="persons.svg" alt="" className="w-90" />
      </div>
      {/* right side form */}
      <div className="w-full lg:w-1/2 h-full flex gap-8 flex-col justify-center items-center">
        <p className="text-3xl mb-5">
          Log In To <span className="text-[#7900BA]">TalentHire</span>
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="w-9/10 lg:w-1/2 flex flex-col gap-1 justify-center items-center"
        >
          <div className="w-full">
            <input
              name="email"
              className="px-5 w-full outline-none text-[#666666] text-sm bg-[#F7F8F9] h-10 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px] "
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <p className="text-red-500 text-sm min-h-5">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </p>
          </div>
          <div className="w-full relative">
            <input
              name="password"
              className="px-5 pr-12 w-full text-[#666666] outline-none text-sm bg-[#F7F8F9] h-10 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px]"
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <p className="text-red-500 text-sm min-h-5">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </p>
            <div
              className="absolute right-4 top-[35%] translate-y-[-50%] cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <BiSolidShow
                  className="text-[#8391A1] text-xl"
                />
              ) : (
                <BiSolidHide
                  className="text-[#8391A1] text-xl"
                />
              )}
            </div>
            {/* hide and show password */}
          </div>
          <span className="w-full  flex justify-between items-center">
            <span className="flex items-center gap-1 ">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="cursor-pointer"
              />
              <p className=" text-[#767F8C] text-[13px]">Remember</p>
            </span>
            <p className="cursor-pointer text-[#7900BA] text-[13px]">
              Forget Password?
            </p>
          </span>
          <button
            className="h-10 w-3/5 bg-[#7900BA] rounded-lg text-white cursor-pointer"
            type="submit"
          >
            {loading? <ClipLoader
              loading={loading}
              cssOverride={override}
              size={20}
            />:"Login"}
          </button>
        </form>
        <div className="flex items-center w-3/5">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="px-4 text-[13px] font-semibold text-gray-400">
            Or Login with
          </span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        <div className="flex gap-2">
          <button className="flex justify-center items-center border-1 border-[#EACFF9] h-8 w-15 rounded-md cursor-pointer">
            <img className="h-6" src="facebookicon.svg" alt="" />
          </button>
          <button className="flex justify-center items-center border-1 border-[#EACFF9] h-8 w-15 rounded-md cursor-pointer">
            <img className="h-5" src="googleicon.svg" alt="" />
          </button>
          <button className="flex justify-center items-center border-1 border-[#EACFF9] h-8 w-15 rounded-md cursor-pointer">
            <img className="h-6" src="linkedinicon.svg" alt="" />
          </button>
        </div>
        <p className="text-[#7D7D7D] text-[13px] ">
          Don't have an account?
          <span className=" text-[#7900BA] font-semibold cursor-pointer">
            {" "}
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}
