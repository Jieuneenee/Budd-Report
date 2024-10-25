import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Report from "./pages/Report";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/report/:userId/:month" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
