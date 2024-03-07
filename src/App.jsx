import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVForm from "./components/cv-form/CVForm";
import NormalCV from "./components/cv-templates/NormalCV";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CVForm />} />
          <Route path="/cv" element={<NormalCV />} />
        </Routes>
      </Router>
      {/* <CVForm /> */}
      {/* <NormalCV /> */}
    </>
  );
}

export default App;
