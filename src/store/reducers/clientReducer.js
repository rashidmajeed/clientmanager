const initState = {
  clients: []
};
const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CLIENT":
      console.log("create client success", action.client);
      return state;

    case "CREATE_CLIENT_ERROR":
      console.log("create client error", action.err);
      return state;
    default:
      return state;
  }
};

export default clientReducer;
