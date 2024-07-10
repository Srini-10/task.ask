import React, { useState } from "react";
import { Pagination } from "antd";
import "./Question.css"; // Import your custom styles

const questions = [
  {
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
  {
    question: "What are the types of linkages?",
    options: [
      "Internal and External",
      "External, Internal and None",
      "External and None",
      "Internal",
    ],
    correctAnswer: 0,
    reason: "The types of linkages are Internal and External.",
  },
  {
    question:
      "Which of the following special symbols allowed in a variable name?",
    options: ["* (asterisk)", "| (pipeline)", "- (hyphen)", "_ (underscore)"],
    correctAnswer: 3,
    reason: "The underscore (_) is allowed in variable names.",
  },
  // Add more questions as needed
];

const QuestionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showReason, setShowReason] = useState({});

  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: optionIndex,
    }));

    if (optionIndex === questions[questionIndex].correctAnswer) {
      setShowReason((prevState) => ({
        ...prevState,
        [questionIndex]: !prevState[questionIndex],
      }));
    }
  };

  const getOptionStyle = (questionIndex, optionIndex) => {
    if (selectedAnswers[questionIndex] !== undefined) {
      return selectedAnswers[questionIndex] === optionIndex
        ? optionIndex === questions[questionIndex].correctAnswer
          ? { color: "#48bf1d" }
          : { color: "#ef4444" }
        : isOptionDisabled(questionIndex, optionIndex)
        ? { color: "gray", cursor: "not-allowed" }
        : {};
    }
    return {};
  };

  const isOptionDisabled = (questionIndex, optionIndex) => {
    return (
      !!showReason[questionIndex] ||
      (selectedAnswers[questionIndex] !== undefined &&
        selectedAnswers[questionIndex] !==
          questions[questionIndex].correctAnswer &&
        selectedAnswers[questionIndex] === optionIndex)
    );
  };

  const renderQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return questions
      .slice(startIndex, endIndex)
      .map((question, questionIndex) => (
        <div
          key={questionIndex}
          style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
        >
          <p className="montserrat-uniquifier">
            <b className="font-medium">
              {startIndex + questionIndex + 1}. {question.question}
            </b>
          </p>
          {question.options.map((option, optionIndex) => (
            <div
              className="montserrat-uniquifier2"
              key={optionIndex}
              onClick={() =>
                !isOptionDisabled(startIndex + questionIndex, optionIndex) &&
                handleOptionClick(startIndex + questionIndex, optionIndex)
              }
              style={{
                ...getOptionStyle(startIndex + questionIndex, optionIndex),
                cursor: isOptionDisabled(
                  startIndex + questionIndex,
                  optionIndex
                )
                  ? "not-allowed"
                  : "pointer",
                marginBottom: "5px",
                marginLeft: "20px",
              }}
            >
              {String.fromCharCode(97 + optionIndex)}. {option}
            </div>
          ))}
          <div
            className={`explanation ${
              showReason[startIndex + questionIndex]
                ? "show montserrat-uniquifier3"
                : ""
            }`}
          >
            <b className="text-[15px] text-[#399fff]">Explanation:</b>
            <br/> {question.reason}
          </div>
        </div>
      ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-20">
      {renderQuestions()}
      <Pagination
        className="mt-10"
        align="center"
        defaultCurrent={1}
        total={questions.length}
        pageSize={questionsPerPage}
        current={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default QuestionComponent;
