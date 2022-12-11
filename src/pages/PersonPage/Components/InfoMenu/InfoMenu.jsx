import React from "react";


function InfoMenu({changeMenu, info}) {
  return (
    <div style={{margin: "30px 0", fontSize: "20px"}}>
      {info.map((item) => {
        return (
          <span
            key={item.id}
            name={item.name}
            onClick={() => changeMenu(item.id)}
            style={{
              color: item.isOpen ? "wheat " : "white",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

export default InfoMenu;
