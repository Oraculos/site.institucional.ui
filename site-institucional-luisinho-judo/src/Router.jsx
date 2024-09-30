import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SejaParceiro from "./pages/SejaParceiro";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
