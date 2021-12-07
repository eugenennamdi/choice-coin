const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "http://choice-coin-api.herokuapp.com";

export { URL };
