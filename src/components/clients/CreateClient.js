import React, { Component } from "react";
import { connect } from "react-redux";
import { createClient } from "../../store/actions/clientActions";
import { Redirect } from "react-router-dom";

class CreateClient extends Component {
  state = {
    clientName: "",
    services: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createClient(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Client</h5>
          <div className="input-field">
            <label htmlFor="text">Client Name</label>
            <input type="text" id="clientName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <textarea
              id="services"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="services">Client Services</label>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createClient: client => dispatch(createClient(client))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateClient);
