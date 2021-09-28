import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then(function (response) {
        setQuote(response);
        // console.log(response);
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
      {quote && (
        <div>
          <p className="text-white z-10 pb-5">{`${quote.data.content}`}</p>
          <p className="text-white z-10">{`${quote.data.author}`}</p>
        </div>
      )}
      <img src="/icon-refresh.svg" alt="Refresh" onClick={getQuote} />
    </div>
  );
};

export default Quote;
