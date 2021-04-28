const initialState = {
    names: []
  };
  console.log(initialState)
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPLOAD_NAMES":
        return {
          ...state,
          names:action.payload
        };
      default:
        return state;
    }
  };
  export default Reducer;