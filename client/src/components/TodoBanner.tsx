import React from "react";

const TodoBanner: React.FC = () => {
  return (
    <h1 style={{ border: "1px solid green" }}>
      There are "this" many todos left!
    </h1>
  );
};

export default TodoBanner;
