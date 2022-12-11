import "./index.scss";

function Buttons({ page, toPage, pages }) {
  pages?console.log(pages, 7456): console.log(789545)

  const buttons = [];
  for(let i = 1; i < pages; i++) {
    buttons.push(i)
    if(i > 9){
      break
    }
  }
  
  
  console.log(buttons, 745645);

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
