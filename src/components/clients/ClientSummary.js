import React from "react";
import moment from "moment";

const ClientSummary = ({ client }) => {
  return (
    <div className="col s12 m4 l5">
      <div className="client-list section ">
        <div className="card z-depth-3 client-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">
              <span className="clientName">Client : </span>
              {client.clientName}
            </span>
            <p>Posted by {client.createdby}</p>
            <p className="grey-text">
              {moment(client.createdAt.toDate()).calendar()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSummary;
