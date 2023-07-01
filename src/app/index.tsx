import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Detail from "./screen/Detail";
import NotFound from "./screen/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personajes" element={<Home />} />
          <Route path="/ubicaciones" element={<NotFound />} />
          <Route path="/episodios" element={<NotFound />} />
          <Route path="/personajes/:id" element={<Detail />} />
          <Route path="/ubicaciones/:id" element={<NotFound />} />
          <Route path="/episodios/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
