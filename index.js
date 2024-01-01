require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.use(cors());

app.get("/search-places", async (req, res) => {
  const { latitude, longitude, radius, placeType } = req.query;

  if (!latitude || !longitude || !placeType) {
    return res.status(400).send("Bad request");
  }

  try {
    const placesRes = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${placeType}&key=${GOOGLE_API_KEY}`
    );
    res.status(200).json(placesRes.data?.results);
  } catch (err) {
    res.status(500).send("System error!");
  }
});

app.get('/google-image', async (req, res) => {
  try {
    const { photo_reference, maxwidth } = req.query;

    if (!photo_reference || !maxwidth) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photo_reference=${photo_reference}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    if (response.headers['content-type']) {
      res.header('Content-Type', response.headers['content-type']);
    }

    res.send(response.data);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
