import React from "react";

function Container(props) {
  return (
    <div
      className="container-sm"
      style={{
        backgroundColor: "lightblue",
        minWidth: "1200px",
        minHeight: "800px",
      }}
      {...props}
    ></div>
  );
}

export default Container;
