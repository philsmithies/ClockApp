import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then(function (response) {
        console.log(response);
        setQuote(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <p className="text-white z-10">{`${quote.data.content}`}</p>
      <p className="text-white z-10">{`${quote.data.author}`}</p>
    </div>
  );
};

export default Quote;
