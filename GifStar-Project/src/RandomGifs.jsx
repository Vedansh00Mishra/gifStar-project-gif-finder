import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RandomGif = () => {
  const [randomGif, setRandomGif] = useState(null);
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomGif = async () => {
      try {
        let APIKEY = "YOUR_API_KEY";
        let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`;
        let response = await fetch(url);

        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        }

        let content = await response.json();
        setRandomGif(content.data);
      } catch (err) {
        setError(err.message); // Set error message if any
      }
    };

    fetchRandomGif();
  }, []);

  return (<>
    <div className="random-gif-container">
      <h1>Random Gif</h1>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {randomGif && <img src={randomGif.images.downsized.url} alt={randomGif.title} />}
    </div>
      <button id="go-back" onClick={() => navigate("/")}>Go Back</button>
      </>
  );
};

export default RandomGif;
