import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  // - add or subtract value from count
  const countHandler = (operator = "+") => {
    setCount((prev) => {
      if (operator === "+") {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });
  };

  // - handle count boundaries
  const countBoundsHandler = (operator = "+") => {
    if (operator === "+" && count >= 10) {
      // learn more about the Error obj
      throw new Error("max value 10");
    } else if (operator === "-" && count <= 0) {
      throw new Error("min value 0");
    }
  };

  // - reset count state and error state
  const resetHandler = () => {
    setError("");
    setCount(0);
  };

  return (
    <>
      <div>
        <button onClick={() => [resetHandler()]}>RESET</button>
        <div style={{ display: "flex" }}>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => {
              try {
                setError("");
                countBoundsHandler("-");
                // - throw will stop execution of the current function
                // - control will be passed to the first catch block in the call stack
                // - if no catch block exists among caller functions, the program will terminate
                countHandler("-");
              } catch (error: any) {
                setError(error.message);
              }
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => {
              try {
                setError("");
                countBoundsHandler("+");
                // - throw will stop execution of the current function
                // - control will be passed to the first catch block in the call stack
                // - if no catch block exists among caller functions, the program will terminate
                countHandler("+");
              } catch (error: any) {
                setError(error.message);
              }
            }}
          >
            +
          </button>
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default App;
