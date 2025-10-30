import TicketComponent from "./TicketComponent";
//recibe la lista de Tickets de App.js la mapea y manda el currenTicket a TicketComponent
const TicketList = ({ tickets }) => {
  // console.log("ticket en TicketList", tickets);
  return (
    <>
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">
          Generated Tickets ({tickets.length})
        </h1>
        {tickets.length === 0 ? ( 
          <p className="text-gray-500">
            No tickets generated yet. Please go to the form!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {tickets.map((ticket) => {
              return (
                <TicketComponent
                  key={ticket.username}
                  fullname={ticket.fullname}
                  email={ticket.email}
                  username={ticket.username}
                  avatarUrl={ticket.avatarUrl}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default TicketList;
