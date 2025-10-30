import TicketForm from "./TicketForm";
import logoFull from "../assets/images/logo-full.svg";
import ticketImage from "../assets/images/pattern-ticket.svg";
import githubIcon from "../assets/images/icon-github.svg";
import { Link } from "react-router-dom";
import patternBottonDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternTopRight from "../assets/images/pattern-squiggly-line-top.svg";

const TicketComponent = ({
  fullname,
  username,
  email,
  avatarUrl,
  date,
  id,
}) => {
  return (
    // SECCION PRINCIPAL
    <section className="section-ticket min-h-screen flex flex-col items-center   p-4 relative overflow-hidden">
    
      {/* 1. CONTENEDOR DEL PRINCIPAL DEL CONTENIDO*/}
      <div className="container-principal  space-y-9 max-w-xl w-full z-20 flex flex-col items-center">
          <img className="img-logo lg:w-50 top-0 pt-7" src={logoFull} alt="headerLogo" />
        {/* HEADER MENSAJE CONFIRMACIÓN*/}
        <header className="text-ticket-container mb-20 space-y-4 w-90 md:space-y-8 md:w-130 lg:w-170 flex flex-col items-center text-center">
          <h1 className="text-3xl leading-8 md:leading-10 lg:leading-13 font-bold md:text-4xl lg:text-[3rem]">
            Congrats,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[hsl(7,88%,67%)] to-gray-300">{fullname}! </span>
            Your ticket is ready.
          </h1>
          <p className=" w-85 lg:w-110 md:w-130 text-[1.2rem] md:text-[1.5rem] lg:text-[1.3rem] leading-6 font-light text-center items-center  ">
            We've emailed your ticket to
            <span className="text-[hsl(7,88%,67%)] font-light"> {email}</span> and will
            send updates in the run up to the event.
          </p>
        </header>

        {/* 2. CARD CONTENEDOR DEL TICKET */}
        <div className="ticket-container mb-20 z-20 relative w-full md:w-full lg:w-130 text-[.7rem] md:text-[3rem] lg:text-[4rem]">
            {/* Patrón de fondo ticket */}
          <img
            className="img-ticket z-15 absolute  h-auto"
            src={ticketImage}
            alt="pattern-ticket"
          />

          {/* Contenedor interior contenido del Ticket */}
          <div className="header-ticket flex flex-col justify-between  p-4 md:p-8 lg:p-6 space-y-6 md:space-y-16 lg:space-y-11 ">
            {/* FILA: SUPERIOR: Logo, Date y ID del Ticket */}
            <div className="">
              <img
                className=" w-40 lg:w-62 md:w-50"
                src={logoFull}
                alt="logo-full"
              />
              <div className=" absolute text-[1.2rem] md:text-[1.7rem] lg:text-3xl right-1 md:right-4 lg:right-0 top-17 md:top-28 lg:top-26 
              font-light rotate-90 opacity-35">
                #{id}
              </div>
              <div className="date-ticket ml-8 md:ml-10 lg:ml-13 text-[.8rem] md:text-[1rem] lg:text-[1rem] p-1  font-light">
                {date} / Austin, TX
              </div>
            </div>

            {/* FILA CENTRAL: Avatar */}
            <div className="container-user-info flex flex-row items-center align-middle space-y-1 lg:space-y-0 space-x-2.5 pt-3">
              <img
                className="img-user-ticket w-12 h-12 md:w-17 md:h-17 rounded-lg border-2 border-transparent object-cover"
                src={avatarUrl}
                alt={username}
              />

            {/* FILA INFERIOR: Nombre, Github y Username */}
            <div className="user-info-ticket  flex flex-col leading-4">
              <div className="fullname-ticket font-bold text-[1.2rem] md:text-2xl ">
                {fullname}
              </div>
              <div className="github-user-container md:text-2xl flex ml-0 mt-1.5  items-center ">
                <img
                  className="github-icon-ticket w-4 h-4 md:w-6 md:h-6 mr-2 "
                  src={githubIcon}
                  alt="icon-github"
                  /> {username}
              </div>
            </div>

                  </div>
          </div>
        </div>
        {/* BOTON CREAR NUEVO TICKET */}
        <Link to={"/"}>
          <button className="button-new-ticket w-85 md:w-120 lg:w-110 py-1 px-4 cursor-pointer text-[1.2rem] md:text-3xl lg:text-2xl  
          border border-transparent rounded-lg shadow-lg bg-[hsl(7,88%,67%)] text-black hover:text-white 
          hover:bg-[hsla(246,15%,58%,1)] hover:border-[hsl(7,88%,67%)] transition duration-200 font-bold ">
            Create New Ticket
          </button>
        </Link>
      </div>
      {/* IMÁGENES DE FONDO */}
      <img
        className="pattern-top-right z-10 w-50 md:w-90 lg:w-150 m-0 p-0 absolute top-0 right-0"
        src={patternTopRight}
        alt="pattern-top"
      />
      <img
        className="pattern-bottom-left w-80  md:w-130 lg:w-200 p-0 z-10 absolute h-auto left-0 bottom-0"
        src={patternBottonDesktop}
        alt="pattern-botton-desktop"
      />
    </section>
  );
};
export default TicketComponent;