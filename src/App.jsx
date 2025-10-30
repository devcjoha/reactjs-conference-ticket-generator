import React from "react";
import { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { Route, Routes } from "react-router-dom";
import TicketComponent from "./components/TicketComponent";


function App() {
  const [tickets, setTickets] = useState([]);
  const addTicket = (newTicket) => {
    setTickets((previewTickets) => [newTicket, ...previewTickets]);
  };
  return (
    <main
      className=" 
      h-screen w-full 
        bg-no-repeat bg-cover bg-center 
        lg:bg-[url('./assets/images/pattern-lines.svg'),url('./assets/images/background-desktop.png')]
        sm:bg-[url('./assets/images/pattern-lines.svg'),url('./assets/images/background-tablet.png')]
        bg-[url('./assets/images/pattern-lines.svg'),url('./assets/images/background-mobile.png')]"
    >
      <Routes>
        <Route
          path="/"
          element={<TicketForm onAddTicket={addTicket} />}
        ></Route>
        <Route
          path="/alltickets"
          element={<TicketList tickets={tickets} />}
        ></Route>
        <Route
          path="/ticket"
          element={
            <TicketComponent
              id={tickets[0]?.id}
              fullname={tickets[0]?.fullname}
              username={tickets[0]?.username}
              email={tickets[0]?.email}
              avatarUrl={tickets[0]?.avatarUrl}
              date={tickets[0]?.date}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
