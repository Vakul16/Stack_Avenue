export const Action = (names) => {
  console.log(names)
      return {
      type: "UPLOAD_NAMES",
      payload: names
    };
  };