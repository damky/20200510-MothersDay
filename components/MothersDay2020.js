import React from "react";
import Blessings from "./heaven";

const family = forever => {
  Blessings();
  return (
    <Home is="heaven on earth"></Home>
  );
}

const Home = (parents, children, love) => {
  return (
    <Home>
      {(parents === "Father" && <Mother/>) && children && love}
    </Home>
  );
}

function Mother(love) {
  return (
    <Mother love="unconditionally">
      <child />
    </Mother>
  )
}

export default family;
