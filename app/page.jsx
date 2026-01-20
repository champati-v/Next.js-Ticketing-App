import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Failed to fetch tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 max-h-screen">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-200">{uniqueCategory}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-4">
                {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                  <TicketCard key={_index} id={_index} ticket={filteredTicket} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
