import React, { Suspense, useState } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const App = () => {
  const [modelsPromise] = useState(() => fetchModels());
  return (
    <>
      <NavBar />
      <section id="main" className="container mx-auto">
        <Banner />
        <Suspense fallback={"Loading"}>
          <Models modelsPromise={modelsPromise} />
        </Suspense>
      </section>
      <Footer />
    </>
  );
};

export default App;
