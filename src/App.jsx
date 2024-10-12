import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Report from "./pages/Report"; // Report 컴포넌트를 임포트합니다.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/report/1" />} />
        <Route path="/report/:userId" element={<Report />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
