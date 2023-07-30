import React from "react";

const About = () => {
  return (
    <div className=" columns-2">
      <div className="flex flex-col">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src="https://m.media-amazon.com/images/I/51H0kUL24XL._AC_SL1500_.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex">
          <img
            src="https://m.media-amazon.com/images/I/41+tp5b6giL._AC_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41v3PB+mCnL._AC_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71Nn7TtpWsL._AC_SL1500_.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/61wJLkB2R6L._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>bider</div>
    </div>
  );
};

export default About;
