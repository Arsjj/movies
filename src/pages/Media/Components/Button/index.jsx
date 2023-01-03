import "./index.scss";

function Buttons({ page, toPage, pages }) {
  const buttons = [];
  for(let i = 1; i < pages; i++) {
    buttons.push(i)
    if(i > 9){
      break
    }
  }
  

  return (
    <div className="buttons">
      {buttons.map((item) => {
        return (
          <button
            key={item}
            id={item}
            className={"btn" + (item === page ? "current" : "")}
            onClick={() => {
              toPage(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
