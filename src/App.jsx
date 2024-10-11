import { useState } from "react";
import Report from "./pages/Report";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Report />
    </>
  );
}

export default App;
