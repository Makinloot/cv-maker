import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVForm from "./components/cv-form/CVForm";
import NormalCV from "./components/cv-templates/NormalCV";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <div style={{ padding: "70px 0 6px" }}> */}
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<CVForm />} />
            <Route path="/cv" element={<NormalCV />} />
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
