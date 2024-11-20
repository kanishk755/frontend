import React from "react";
import Navbar from "../components/Navbar.Jsx";
import Banner from "../components/banner";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar></Navbar>
      <Banner />
      <FreeBook />
      <Footer></Footer>
    </div>
  );
}

export default Home;
