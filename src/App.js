import Header from "./components/Header";
import Nomad from "./components/Nomad";
import Home from "./components/Home";
import NoPage from "./components/NoPage";

import Comparision from "./components/Comparison";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/nomad" element={<Nomad />} />
          <Route path="/comparison" element={<Comparision />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
