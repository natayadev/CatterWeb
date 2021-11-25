const axios = require("axios");
const token = "Bearer AAAAAAAAAAAAAAAAAAAAAECmWAEAAAAAndsKfU2XGGC0eRkeshDhGJz%2FK4E%3Dp6Ymbw6TlJCIDtFEJESRnFV31EHgV4gX3e9tnPeZ62kKCltFXV"; // Replace BEARER_TOKEN with your token
const options = {
  method: get,
  headers: {
    "Content-type": "application/json",
    Authorization: token,
  },
};
const getData = async () => {
  try {
    const response = await axios.get(
      `https://api.twitter.com/1.1/trends/place.json?id=1`,
      options
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
getData();