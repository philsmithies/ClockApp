import { useState, useRef } from "react";

const SeeMoreToggle = ({ toggleState, scroll }) => {
  const seeMoreEl = useRef(null);
  const [isRotated180, setIsRotated180] = useState(true);
  const [text, setText] = useState("More");

  const viewMore = () => {
    const seeMore = seeMoreEl.current; // corresponding DOM node
    if (isRotated180) {
      toggleState();
      scroll.scrollToBottom({
        duration: 100,
      });
      seeMore.className = "animate-spin rotate-180";
      setText("Less");
      setTimeout(() => {
        seeMore.className = "";
        // 950 for the spin animation
      }, 950);
      setIsRotated180(false);
    } else {
      scroll.scrollToTop({
        duration: 100,
      });
      seeMore.className = "animate-spin";
      setText("More");
      setTimeout(() => {
        seeMore.className = "rotate-180";
        toggleState();
      }, 500);
      setIsRotated180(true);
    }
  };

  return (
    <div className="flex flex-row align-center pt-5 md:pt-0 p-2 mr-10 z-10">
      <div className="self-center flex flex-row bg-white rounded-full py-2.5 px-5">
        <p className="text-black self self-center font-bold text-2xl pr-4">
          {text}
        </p>
        <img
          className="self-center hover:cursor-pointer"
          src="/icon-arrow-up.svg"
          alt="Up Arrow"
          onClick={viewMore}
          ref={seeMoreEl}
        />
      </div>
    </div>
  );
};

export default SeeMoreToggle;
