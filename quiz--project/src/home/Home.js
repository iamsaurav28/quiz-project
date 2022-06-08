import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const {
    amount,
    setAmount,
    setDifficulty,
    setCategory,
    handleClick,
    showErr
  } = useGlobalContext();

  return (


    <div className="wrapper">
      <form className="inner-wrap">
        <h1>Setup Quiz</h1>
        <p>Number Of Questions</p>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            Number(e.target.value) > 0
              ? setAmount(Number(e.target.value))
              : setAmount(1)
          }
        />
        <p>Category</p>
        <select onChange={(e) => setCategory(Number(e.target.value))}>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="18">Science: Computers</option>
        </select>
        <p>Select Difficulty</p>
        <select onChange={(e) => setDifficulty(e.target.value.toString())}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        {showErr && (
          <p className="error">
            Can't Generate Questions, Please Try Different Options
          </p>
        )}
        <button type="submit" onClick={(e) => handleClick(e)}>
          Start
        </button>
      </form>
       
    </div>
  );
};

export default Home;