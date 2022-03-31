import React from "react";
import "../styles/app.scss";
import Greetings from "./Components/Greetings";
import Header from "./Components/Header";
import Requests from "./Components/Requests";


function App() {
  return (
    <>
      <Header />
      <Greetings />
      <Requests />
    </>
  );
}

export default App;
