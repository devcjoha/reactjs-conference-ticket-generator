import React from "react";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const handleAvatarUpdate = (imageList) => {
    setAvatar(imageList);
  };
  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
     setInput({
      ...input,
      [name]: value,
    });
  };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      avatar.length === 0 ||
      input.fullname === "" ||
      input.username === "" ||
      input.email === "" ||
      !emailRegex.test(input.email)
    ) {
      setErrors({
        avatar: avatar.length === 0 ? "Image is Required!" : "",
        fullname: input.fullname === "" ? "Full name is Required!" : "",
        username: input.username === "" ? "Username is Required!" : "",
        email:
          !emailRegex.test(input.email) || input.email === ""
            ? "Email is Required!"
            : "",
      });
      return;
    } else {
      const newTicket = {
        fullname: input.fullname,
        username: input.username,
        email: input.email,
        avatarUrl: avatar.length > 0 ? avatar[0].data_url : null,
      };
      //Paso la data del ticket al padre
      onAddTicket(newTicket);
      navigate("/ticket");

      //Limpio el formulario
      setInput({ fullname: "", username: "", email: "" });
      setAvatar([]);
    }
  };
  return (
    <>
      <header>
        <p className="title-form">
          Your Jorney to Coding Conf 2025 Starts Here!
        </p>
        <p className="subtitle-form">
          Secure your spot at next year's Coding Conference
        </p>
      </header>
      <form onSubmit={handleSubmit} className="input-container" noValidate>
        <label className="image-label">Upload Avatar:</label>
        <div>
          <UploadImage
            onImageUpdate={handleAvatarUpdate}
            currentAvatar={avatar}
          />
          {errors.avatar ? <p className="errors-style">{errors.avatar}</p> : ""}
        </div>
        <div>
          <label className="name-label">Full Name:</label>
          <input
            id="name"
            type="text"
            className="input-fullname"
            placeholder="Full Name"
            value={input.fullname}
            name="fullname"
            onChange={handleInputOnChange}
            autoComplete="on"
          />
          {errors.fullname ? (
            <p className="errors-style">{errors.fullname}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label className="email-label">Email Address:</label>
          <input
            id="email-input"
            type="email"
            name="email"
            // className={`input-email ${isError ? "error-state" : ""}`}
            placeholder="Example@email.com"
            value={input.email}
            onChange={handleInputOnChange}
          ></input>
          {errors.email ? <p className="errors-style">{errors.email}</p> : ""}
        </div>
        <div>
          <label className="name-label">Github Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            className="input-username"
            placeholder="@yourusername"
            value={input.username}
            onChange={handleInputOnChange}
          />
          {errors.username ? (
            <p className="errors-style">{errors.username}</p>
          ) : (
            ""
          )}
        </div>
        <button className="submit-button" type="submit">
          Generate My Ticket
        </button>
      </form>
    </>
  );
}
export default TicketForm;
