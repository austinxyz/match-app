import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Lineup from "./pages/Lineup";
import Line from "./pages/Line";
import FixedLineup from "./pages/FixedLineup";
import FixedPairLineup from "./pages/FixedPairLineup";
import SelectPairLineup from "./pages/SelectPairLineup";

export default function App({team}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lineup" element={<Lineup team={team}/>} />
          <Route path="line" element={<Line team={team}/>} />
          <Route path="fixedlineup" element={<FixedLineup team={team}/>} />
          <Route path="fixedpairlineup" element={<FixedPairLineup team={team}/>} />
          <Route path="selectpairlineup" element={<SelectPairLineup team={team}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
