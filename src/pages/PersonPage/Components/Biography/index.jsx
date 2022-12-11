import React from "react";

function Biography({ data }) {
  return (
    <div
      style={{
        textAlign: "start",
        width: '40rem',
        fontSize: "18px",
        color: "whitesmoke"
      }}
    >
      {data?.biography}
    </div>
  );
}

export default Biography;
