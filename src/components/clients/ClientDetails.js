import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Bar } from "react-chartjs-2";

// implementing chartjs

const data = {
  labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [40, 59, 20, 81, 56, 55, 40]
    }
  ]
};

const ClientDetails = props => {
  const id = props.match.params.id;
  const { client, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (client) {
    return (
      <div className="container section client-details">
        <div className="card z-depth-3">
          <div className="card-content">
            <img className="client-img" src="http://i.pravatar.cc/300" />
            <h4 className="card-title">Client: {client.clientName}</h4>
            <div>{client.services}</div>
          </div>
          <div>
            <Bar
              data={data}
              width={100}
              height={150}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Created by {client.createdby}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading client...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const clients = state.firestore.data.clients;
  const client = clients ? clients[id] : null;
  return {
    client: client,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "clients"
    }
  ])
)(ClientDetails);
