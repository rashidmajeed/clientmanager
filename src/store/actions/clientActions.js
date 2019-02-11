export const createClient = client => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    // grabbing profile data from the firebse auth profile state
    const profile = getState().firebase.profile;
    const clientId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("clients")
      .add({
        ...client,
        clientId: clientId,
        createdby: profile.firstname + " " + profile.lastname,
        location: profile.location,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_CLIENT", client });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CLIENT_ERROR" }, err);
      });
  };
};
