import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
