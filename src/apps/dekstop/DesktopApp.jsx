import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Desktop from "./pages/Desktop";
import LoadingMac from "./components/login/LoadingMac";
import LoginMac from "./components/login/LoginMac";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingMac />} />
        <Route path="/login" element={<LoginMac />} />
        <Route path="/alessandro" element={<Desktop />} />

        <Route path="*" element={<LoginMac />} />
      </Routes>
    </Router>
  );
}

export default App;
