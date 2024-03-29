import React, { useContext } from "react";
import { CountContext } from "./index";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D
      <button onClick={() => countContext.countDispatch("increment")}>+</button>
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
export default ComponentD;
