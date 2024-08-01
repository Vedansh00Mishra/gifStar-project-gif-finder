import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Gifs.jsx"; // Ensure this path is correct
import { FaSearch } from "react-icons/fa";

const Gifs = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const grabdata = async (e) => {
    e.preventDefault();

    let APIKEY = "YOUR_API_KEY";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=${search}`;
    let response = await fetch(url);
    let content = await response.json();

    setGifs(content.data);
    console.log(content.data);
  };

  return (
    <>
      <div className="sticky-container">
        <div className="heading-container">
          <h1 className="heading">GifStar</h1>
          <img
            src="nyan-cat-poptart-cat.gif"
            alt="GifStar Logo"
            className="heading-gif"
          />
        </div>
        <form onSubmit={grabdata}>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit"><FaSearch /></button>
        </form>
        &nbsp;
        <Link to="/random">
          <button id="random">Random GIF</button>
        </Link>
      </div>
      <Container gifs={gifs} />
    </>
  );
};

export default Gifs;
