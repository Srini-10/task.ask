import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContainerContext } from "../../context/ContainerContext.tsx";

const allQuestions = {
  // Example structure, replace with your actual data fetching logic
  "new-topic": {
    question:
      "Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1?",
    options: [
      "rem = 3.14 % 2.1;",
      "rem = modf(3.14, 2.1);",
      "rem = fmod(3.14, 2.1);",
      "Remainder cannot be obtained in floating point division.",
    ],
    correctAnswer: 2,
    reason:
      "The fmod function is used to obtain the remainder in floating-point division.",
  },
  // Add more questions for other topics as needed
};

const TopicDetails = () => {
  const { containers } = useContext(ContainerContext);
  const { topicName } = useParams();

  // Retrieve question details based on topicName
  const questionDetails = allQuestions[topicName];

  if (!questionDetails) {
    return <p>No question found for this topic.</p>; // Handle case where no questions are found
  }

  return (
    <div>
      <h2>Question Details for {topicName}</h2>
      <div className="question-container">
        <p className="question-text">
          <b>{questionDetails.question}</b>
        </p>
        <ul className="options-list">
          {questionDetails.options.map((option, index) => (
            <li key={index} className="option">
              {String.fromCharCode(97 + index)}. {option}
            </li>
          ))}
        </ul>
        <p className="reason">
          <b>Explanation:</b> {questionDetails.reason}
        </p>
      </div>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default TopicDetails;
