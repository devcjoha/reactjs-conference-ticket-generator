import React from "react";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patternBottonDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternTopRight from "../assets/images/pattern-squiggly-line-top.svg";
import logoFull from "../assets/images/logo-full.svg";

function TicketForm({ onAddTicket }) {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState([]);
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    username: "",
    email: "",
    avatar: "",
  });

  //Actualiza la imagen si se usa la función onImageUpdate
  const handleAvatarUpdate = (imageList, errorMsg) => {
    setAvatar(imageList);
    if (errorMsg) {
      setErrors({
        ...errors,
        avatar: errorMsg,
      });
    } else {
      setErrors({
        ...errors,
        avatar: "",
      });
    }
  };
  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setInput({
      ...input,
      [name]: value,
    });
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const genericId = (length = 5) => {
    const timestamp = Date.now().toString();
    return timestamp.slice(-length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (avatar.length === 0)
      newErrors.avatar = "Please upload a photo under 2MB.";
    if (input.fullname === "")
      newErrors.fullname = "Please enter your full name.";
    if (input.username === "") newErrors.username = "Username is required.";
    if (input.email === "")
      newErrors.email = "Please enter a valid email address.";
    else if (!emailRegex.test(input.email))
      newErrors.email = "Invalid email format.";

    setErrors({
      ...errors,
      ...newErrors,
    });

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    const ticketId = genericId(5);
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const newTicket = {
      id: ticketId,
      fullname: input.fullname,
      username: input.username,
      email: input.email,
      avatarUrl: avatar.length > 0 ? avatar[0].data_url : null,
      date: formattedDate,
    };
    onAddTicket(newTicket);
    navigate("/ticket");

    setInput({ fullname: "", username: "", email: "" });
    setAvatar([]);
  };

  const InputStyle =
    "w-full h-12 px-4 py-2 border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:ring-gray-300 focus:border-gray-200 transition duration-200 ease-in-out";
  const LabelStyle = "block text-[1rem] font-medium text-gray-300 font-light";
  const ErrorStyle = "absolute text-xs font-medium text-red-500 ";
  const getInputBorderClass = (fieldError) =>
    `border ${fieldError ? "border-red-500" : "border-gray-300"}`;
  return (
    <>
      <section className="section-form relative w-full h-screen flex flex-col justify-evenly items-center p-4 overflow-hidden">
        {/* HEADER */}
        <img
          className="img-logo w-34 md:w-50 "
          src={logoFull}
          alt="imgLogo"
        />
        <header className="header-container w-80 z-20 md:w-100 lg:w-170 flex flex-col items-center mb-8">
          <h1 className=" text-center text-[1.8rem] leading-8 lg:leading-12 font-bold md:text-4xl lg:text-[3rem]">
            Your Jorney to Coding Conf 2025 Starts Here!
          </h1>
          <p className="font-light tracking-wider mt-3 text-center">
            Secure your spot at next year's biggest coding conference.
          </p>
        </header>
        {/* FORM */}
        <div className="form-container relative z-20 flex flex-col items-center  max-w-md w-full">
          <form
            onSubmit={handleSubmit}
            className="z-20 w-90 flex flex-col space-y-6"
            noValidate
          >
            {/* INPUT AVATAR */}
            <div className="space-y-2">
              <label htmlFor="avatar" className={LabelStyle}>
                Upload Avatar:
              </label>
              {/*OJO*/}
              <div className="flex ">
                <UploadImage
                  onImageUpdate={handleAvatarUpdate}
                  currentAvatar={avatar}
                  errorMsg={errors.avatar}
                  errorState={errors.avatar}
                />
              </div>

              {errors.avatar ? (            
                <p className={ErrorStyle}>
                  {errors.avatar}
                </p>
              ) : (  
                <p className="text-xs text-gray-400 mt-1">
                  ⨀ Please upload a photo under 2MB.
                </p>
              )}
            </div>
            {/* INPUT FULLNAME */}
            <div className="space-y-2">
              <label htmlFor="fullname" className={LabelStyle}>
                Full Name:
              </label>
              <input
                id="fullname"
                type="text"
                className={`${InputStyle} ${getInputBorderClass(
                  errors.fullname
                )}`}
                placeholder="Full Name"
                value={input.fullname}
                name="fullname"
                onChange={handleInputOnChange}
                autoComplete="off"
              />
              {errors.fullname ? (
                <p className={ErrorStyle}>{errors.fullname}</p>
              ) : (
                ""
              )}
            </div>
            {/* INPUT EMAIL */}
            <div className="space-y-2">
              <label htmlFor="email" className={LabelStyle}>
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`${InputStyle} ${getInputBorderClass(errors.email)}`}
                placeholder="Example@email.com"
                value={input.email}
                onChange={handleInputOnChange}
                autoComplete="off"
              ></input>
              {errors.email ? <p className={ErrorStyle}>{errors.email}</p> : ""}
            </div>
            {/* USERNAME */}
            <div className="space-y-2">
              <label htmlFor="username" className={LabelStyle}>
                Github Username:
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className={`${InputStyle} ${getInputBorderClass(
                  errors.username
                )}`}
                placeholder="@yourusername"
                value={input.username}
                onChange={handleInputOnChange}
                autoComplete="off"
              />
              {errors.username ? (
                <p className={ErrorStyle}>{errors.username}</p>
              ) : (
                ""
              )}
            </div>
            {/* BOTÓN SUBMIT */}
            <div className="button-container z-20 cursor-pointer mt-5 bg-[hsl(7,88%,67%)] rounded-[.8rem]">
              <button
                className="w-full h-12 text-black font-extrabold text-lg hover:text-white hover:bg-[hsla(246,15%,58%,1)] hover:border-[hsl(7,88%,67%)] border rounded-lg cursor-pointer"
                type="submit"
              >
                Generate My Ticket
              </button>
            </div>
          </form>
        </div>
        {/* IMÁGENES DE FONDO */}
        <img
          className="pattern-top-right z-10 w-50 md:w-90 lg:w-150 m-0 p-0 absolute top-0 right-0"
          src={patternTopRight}
          alt="pattern-top"
        />
        <img
          className="pattern-bottom-left w-80 md:w-130 lg:w-200 p-0 z-10 absolute h-auto opacity-80 left-0 bottom-0"
          src={patternBottonDesktop}
          alt="pattern-botton-desktop"
        />
      </section>
    </>
  );
}
export default TicketForm;
