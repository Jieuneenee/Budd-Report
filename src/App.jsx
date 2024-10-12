import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Report from "./pages/Report"; // Report 컴포넌트를 임포트합니다.

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
