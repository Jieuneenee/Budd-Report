import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Report from "./pages/Report";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/report/:userId" element={<Report />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
