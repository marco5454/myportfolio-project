import React from "react";
import Nav from "./COMPONENTS/Nav/Nav";
import Header from "./COMPONENTS/Header/Header";
import About from "./COMPONENTS/About/About";
import Role from "./COMPONENTS/Roles/Role";
import Footer from "./COMPONENTS/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Role />
      <Footer />
    </div>
  );
};

export default App;
