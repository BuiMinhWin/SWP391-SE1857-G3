import React from "react";

const Hello = () => {
  // return (
  //     <div className = 'dummyClass'>
  //         <h1>Hello Visual V3</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    {id: 'hello', className: 'dummyClass'},
    React.createElement("h1", null, "Hello visual")
  );
};
export default Hello;
