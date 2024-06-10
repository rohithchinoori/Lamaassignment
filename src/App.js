import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./component/Projects";
import Upload from "./component/Upload";
import Settings from "./component/Settings";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/setting" element={<Settings />} />
    </Routes>
  </Router>
);
export default App;
