import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Work } from "./pages/work/Index";
import { MahaliaXiaoqi } from "./pages/work/MahaliaXiaoqi";
import { StateMedicaidAgency } from "./pages/work/StateMedicaidAgency";
import { StravaFit } from "./pages/work/StravaFit";
import { NoPage } from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/mahalia-xiaoqi" element={<MahaliaXiaoqi />} />
          <Route
            path="/work/state-medicaid-agency"
            element={<StateMedicaidAgency />}
          />
          <Route path="/work/stravafit" element={<StravaFit />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
