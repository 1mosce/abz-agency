import React from "react";
import "../styles/app.scss";
import Greetings from "./Components/Greetings";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Greetings/>
    </>
  );
}

export default App;
