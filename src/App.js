import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Footer from "./components/Footer";
import browsersData from "./data/browsers.json";

const App = () => {
  return (
    <div>
      <Header title="Popular web browsers" />
      <Navigation />
      <main>
        <Article browsers={browsersData} />
      </main>
      <Footer copyright="Copyright by Bogate Interfejsy Webowe" />
    </div>
  );
};

console.log(browsersData);
export default App;