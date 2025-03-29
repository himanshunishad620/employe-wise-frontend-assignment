import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useData } from "../../utils/useData";
import { IoMdCloseCircle } from "react-icons/io";
import { ClipLoader} from "react-spinners";
import { useFormik } from "formik";
import * as Yup from "yup";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function ListItem({ user, searchText }) {
  if (
    !user?.first_name.includes(searchText) &&
    !user?.last_name.includes(searchText)
  )
    return;
  const [deleteing, setDeleteing] = useState(false);
  const { updateData, updating, deleteUser } = useData();
  const [popup, setPopup] = useState(false);
  const handleSubmit = async () => {
    await updateData(user.id, formik.values);
    setPopup(false);
  };
  const handleDelete = async () => {
    setDeleteing(true);
    await deleteUser();
    setDeleteing(false);
  };
  const formik = useFormik({
    initialValues: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address!").required("Required!"),
      first_name: Yup.string().required("Required!"),
      last_name: Yup.string().required("Required!"),
    }),
    onSubmit: handleSubmit,
  });
  return (
    <>
      <li className="p-3  border-b-1 flex w-full justify-between">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-lg" src={user.avatar} alt="" />
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
          <div className="flex gap-6">
            <MdEdit
              className="cursor-pointer text-xl text-gray-400"
              onClick={() => setPopup(!popup)}
            />
            {deleteing ? (
              <ClipLoader
                loading={deleteing}
                cssOverride={override}
                size={20}
              />
            ) : (
              <AiFillDelete
                onClick={handleDelete}
                className="cursor-pointer text-xl text-red-500"
              />
            )}
          </div>
        </div>
      </li>
      {popup && (
        <div className=" flex justify-center  items-center w-full fixed top-0 left-0 h-full bg-black/40 ">
          <form
            onSubmit={formik.handleSubmit}
            className="relative bg-white p-8 lg:p-15 gap-2 m-auto rounded-xl w-9/10 lg:w-2/7 flex flex-col justify-center items-center "
          >
            <div className="w-full">
              <input
                className="px-5 w-full outline-none text-[#666666] text-sm bg-[#F7F8F9] h-10 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px] "
                name="email"
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
            <div className="w-full">
              <input
                className="px-5 w-full outline-none text-[#666666] text-sm bg-[#F7F8F9] h-10 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px] "
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
              <p className="text-red-500 text-sm min-h-5">
                {formik.touched.first_name && formik.errors.first_name
                  ? formik.errors.first_name
                  : ""}
              </p>
            </div>
            <div className="w-full">
              <input
                className="px-5 w-full outline-none text-[#666666] text-sm bg-[#F7F8F9] h-10 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px] "
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              <p className="text-red-500 text-sm min-h-5">
                {formik.touched.last_name && formik.errors.last_name
                  ? formik.errors.last_name
                  : ""}
              </p>
            </div>
            <button
              className="h-10 w-3/5 bg-[#7900BA] rounded-lg text-white cursor-pointer"
              type="submit"
            >
              {updating ? (
                <ClipLoader
                  loading={updating}
                  cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    borderColor: "white",
                  }}
                  size={20}
                />
              ) : (
                "Update"
              )}
            </button>
            <IoMdCloseCircle
              onClick={() => setPopup(false)}
              className="text-[#7900BA] text-2xl lg:text-3xl absolute top-[10px] right-[10px]"
            />
          </form>
        </div>
      )}
    </>
  );
}
