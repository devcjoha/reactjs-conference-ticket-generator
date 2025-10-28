import TicketForm from "./TicketForm";
import logoFull from "../assets/images/logo-full.svg";
import ticketImage from "../assets/images/pattern-ticket.svg";
const TicketComponent = ({ fullname, username, email, avatarUrl }) => {
  console.log("ticketComponent", fullname, username, email, avatarUrl);
  return (
    <>
      <div>
        TICKET COMPONENT
        <img src={logoFull} alt="headerLogo" />
      </div>

      <p>Congrats, {fullname}! your ticket is ready.</p>
      <p>
        We've emailed your ticket to {email} and will send updates in the run up
        to the event
      </p>
      <div className="ticket-container">
        <img src={logoFull} alt="logo-full" />
        <img className="w-1/2 bg" src={ticketImage} alt="pattern-ticket" />
        <div>Date</div>
        <img className="w-1/9" src={avatarUrl} alt={username} />
        <div className="name">{fullname}</div>
        <div className="username">{username}</div>
      </div>
      <div>
        <button className="w-1/2 py-1 px-4 border border-transparent rounded-lg shadow-lg text-orange-button-500 bg-Orange-500 hover:bg-Orange-500 focus:outline-none focus:ring-2focus:ring-offset-2 transition duration-200 font-bold text-lg ">
          Create another ticket
        </button>
      </div>
    </>
  );
};
export default TicketComponent;
