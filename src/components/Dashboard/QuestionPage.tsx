// src/components/Dashboard/QuestionPage.js
import React from "react";
import { useParams } from "react-router-dom";
import QuestionComponent from "./QuestionComponent.tsx"; // Adjust path as needed

const QuestionPage = () => {
  const { topicId } = useParams(); // Extract topicId from the URL

  return (
    <div>
      <h1>Questions for Topic {topicId}</h1>
      <QuestionComponent topicId={topicId} />{" "}
      {/* Pass topicId to QuestionComponent */}
    </div>
  );
};

export default QuestionPage;
