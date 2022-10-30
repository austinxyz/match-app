import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Lineup from "./pages/Lineup";

export default function App({team}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lineup" element={<Lineup team={team}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
