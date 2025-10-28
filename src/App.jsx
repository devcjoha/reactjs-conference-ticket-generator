import React from "react";
import { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { Route, Routes } from "react-router-dom";
import TicketComponent from "./components/TicketComponent";

function App() {
  const [tickets, setTickets] = useState([]);
  console.log("Ticket generado STATE APP", tickets);
  const addTicket = (newTicket) => {
    setTickets((previewTickets) => [newTicket, ...previewTickets]);
  };
  return (
    <>
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
              fullname={tickets[0]?.fullname}
              username={tickets[0]?.username}
              email={tickets[0]?.email}
              avatarUrl={tickets[0]?.avatarUrl}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
