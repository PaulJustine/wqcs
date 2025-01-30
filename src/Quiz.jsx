import React, { useState } from "react";

const Quiz = () => {
  const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      question: "What is 9 + 2?",
      options: ["3", "11", "5", "6"],
      answer: "11",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (!isAnswered) {
      if (selectedOption === quizData[currentQuestion].answer) {
        setScore(score + 1);
      }
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(false);
    } else {
      alert(`Quiz Over! Your score: ${score}/${quizData.length}`);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div id="quiz">
        <p id="question">{quizData[currentQuestion].question}</p>
        <div id="options">
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <p id="score">Your score: {score}</p>
      <button id="next-btn" onClick={handleNext} disabled={!isAnswered}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
