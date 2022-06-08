import React from "react";
import "./styles.css";
import Loading from "./home/Loading";
import Home from "./home/Home";
import { useGlobalContext } from "./context";
import Question from "./home/Question";


function App() {
  const { loading, showQ } = useGlobalContext();

  if (!loading && !showQ) {
    return (
      <>
        <Home />
  
      </>
    );
  }
  if (loading && !showQ) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (showQ) {
    return (
      <>
        <Question />
      </>
    );
  }
  
}
export default App;
