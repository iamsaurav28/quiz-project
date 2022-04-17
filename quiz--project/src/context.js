import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [showQ, setShowQ] = useState(false);

  const [randomQ, setRandomQ] = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [showErr, setShowErr] = useState(false);

  //click start button (Home.js), change url with changeable states
  const handleClick = (e) => {
    e.preventDefault();
    if (amount > 0 && amount < 21) {
      setUrl(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
    } else {
      setShowErr(true);
    }
  };
  //Fetch API
  const fetchApi = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const info = await response.json();
      setData(shuffleArray(info.results));
      setLoading(false);
      setShowQ(true);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    if (url !== "") fetchApi();
  }, [fetchApi, url]);
  //Randomize Array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  // click on questions (Question.js)
  const handleQuestion = (e) => {
    e.preventDefault();
    if (data[qIndex].correct_answer === e.target.innerText) {
      setCount1(count1 + 1);
    }
    if (qIndex < data.length - 1) {
      setQIndex(qIndex + 1);
    }
    setCount2(count2 + 1);
  };

  // play again button (Question.js)
  const handlePop = () => {
    setCount1(0);
    setCount2(0);
    setQIndex(0);
    setShowQ(false);

    setData([]);
    setRandomQ([]);
    setAmount(10);
    setCategory(9);
    setDifficulty("easy");
  
  };
  return (
    <AppContext.Provider
      value={{
        amount,
        setAmount,
        setCategory,
        setDifficulty,
        handleClick,
        loading,
        data,
        showQ,
        count1,
        count2,
        setCount1,
        setCount2,
        handleQuestion,
        randomQ,
        setRandomQ,
        qIndex,
    
        showErr
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };