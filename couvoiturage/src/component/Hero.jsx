import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="bg-hero">
      <img
        className="bg-background"
        src="https://www.perthairporttransfers365.com.au/wp-content/uploads/2016/10/image-8.jpg"
        alt=""
      />

      <h1>
        <Typewriter
          options={{
            strings: ["On a le covoit' en commun"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default Hero;
