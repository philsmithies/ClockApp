import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const spinnerEl = useRef(null);

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

  const loadQuoteSpinner = () => {
    const spinner = spinnerEl.current; // corresponding DOM node
    spinner.className = "animate-spin";
    setTimeout(() => {
      spinner.className = "";
    }, 500);
    getQuote();
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
      <img
        src="/icon-refresh.svg"
        alt="Refresh"
        onClick={loadQuoteSpinner}
        ref={spinnerEl}
      />
    </div>
  );
};

export default Quote;
