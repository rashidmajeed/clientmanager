import React from "react";
import ClientSummary from "./ClientSummary";
import { Link } from "react-router-dom";

const ClientList = ({ clients }) => {
  return (
    <div className="client-list">
      {clients &&
        clients.map(client => {
          return (
            <Link to={"/client/" + client.id} key={client.id}>
              <ClientSummary client={client} key={client.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ClientList;
