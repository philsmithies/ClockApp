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
    <>
      {quote && (
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-full">
            <p className="text-white z-10 pb-5 pr-2">{`${quote.data.content}`}</p>
            <p className="text-white z-10">{`${quote.data.author}`}</p>
          </div>
          <div className="self-start pt-1 w-6/12 z-10">
            <img
              src="/icon-refresh.svg"
              alt="Refresh"
              onClick={loadQuoteSpinner}
              ref={spinnerEl}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Quote;
