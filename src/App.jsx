import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVForm from "./components/cv-form/CVForm";
import AucklandCV from "./pages/auckland/AucklandCV";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";
import EdinburghCV from "./pages/edinburgh/EdinburghCV";
import OtagoCV from "./pages/otago/OtagoCV";

function App() {
  return (
    <>
      <Header />
      {/* <div style={{ padding: "70px 0 6px" }}> */}
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<CVForm />} />
            <Route
              path="/cv/auckland"
              element={
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 64,
                  }}
                >
                  <AucklandCV />
                </div>
              }
            />
            <Route
              path="/cv/edinburgh"
              element={
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 64,
                  }}
                >
                  <EdinburghCV />
                </div>
              }
            />
            <Route
              path="/cv/otago"
              element={
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 64,
                  }}
                >
                  <OtagoCV />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
