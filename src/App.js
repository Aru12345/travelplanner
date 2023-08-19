import Header from "./components/Header";
import Nomad from "./components/Nomad";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import { apiFetch } from "./api";
import MyJournal from "./components/MyJournal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    apiFetch().then((data) => {
      if (data) {
        setPlaces(data);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/nomad"
            element={<Nomad places={places} setPlaces={setPlaces} />}
          />
          <Route path="/currency" element={<MyJournal />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
