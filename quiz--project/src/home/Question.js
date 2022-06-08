import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import POPUP from "./POPUP";

const Question = () => {
  const {
    data,
    count1,
    count2,
    handleQuestion,
    randomQ,
    setRandomQ,
    handleNextQ,
    qIndex
  } = useGlobalContext();

  useEffect(() => {
    let myArr = data[qIndex].incorrect_answers;
    myArr.push(data[qIndex].correct_answer);
    for (let i = myArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = myArr[i];
      myArr[i] = myArr[j];
      myArr[j] = temp;
    }
    setRandomQ(myArr);
  }, [data, setRandomQ, qIndex]);

  return (
    <>
      <div className="question-wrap">
        <div className="question-inner">
          <p className="first">
            Correct Answers: {count1} / {count2}
          </p>
          <h1 className="second">{data[qIndex].question}</h1>
          <div className="third">
            {randomQ.map((item, id) => (
              <div key={id}>
                <button
                  className="third-btn"
                  onClick={(e) => {
                    handleQuestion(e);
                  }}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="fourth">
            <button onClick={() => handleNextQ()}>Next Question</button>
          </div>
        </div>
      </div>
      <POPUP />
    </>
  );
};

export default Question;