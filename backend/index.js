const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r=await axios.put(
      'https://api.chatengine.io/users/',
      {username: username,secret: username,first_name: username},
      {headers:{"private-key": "657cb027-0dac-4337-9dd5-514a5e19d2fe"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

});

app.listen(3001);