import React, { Suspense, useState } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Tab from "./components/Tab";
import Cart from "./components/cart/Cart";

const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const App = () => {
  const [modelsPromise] = useState(() => fetchModels());
  const [cartModels, setCartModels] = useState([]);
  const [tab, setTab] = useState("models");
  // console.log(cartModels)
  return (
    <>
      <NavBar />
      <section id="main" className="container mx-auto">
        <Banner />
        <Tab tab={tab} setTab={setTab} />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-40">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          {tab === "models" && (
            <Models
              modelsPromise={modelsPromise}
              cartModels={cartModels}
              setCartModels={setCartModels}
            />
          )}
        </Suspense>
        {tab === "cart" && (
          <div className="flex flex-col gap-3">
            {cartModels.map((cartModel) => (
              <Cart cartModel={cartModel} key={cartModel.id} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default App;
