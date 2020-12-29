import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID b_EnqEEQbd0oQSJdijgsEajFM4tNrXVSJjOhUvIYpCE",
  },
});
