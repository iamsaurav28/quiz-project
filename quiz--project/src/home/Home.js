import React from "react";


const Home = () => {


  return (


    <div className="wrapper">
      <form className="inner-wrap">
        <h1>Setup Quiz</h1>
        <p>Number Of Questions</p>
        <input
          type="number"
        />
        <p>Category</p>
        <select>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="18">Science: Computers</option>
        </select>
        <p>Select Difficulty</p>
        <select >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
       
        <button>
          Start
        </button>
      </form>
       
    </div>
  );
};

export default Home;