import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer NWsnS0hIX_dv_dlnPN5ZxOJqDXcRQTIRo1GkciRMcY3GIP0cdFA55XnfkP8nxcdps8EoH_YqSB0dWmlyQRq1EY3nrzAcp3aCpFsJBcXCtx2GVOK_Og6vCDBPlYyKYnYx",
  },
});
