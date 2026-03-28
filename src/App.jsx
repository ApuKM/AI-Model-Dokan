import React from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <section id="main">
        <Banner />
      </section>
      <Footer />
    </>
  );
};

export default App;
