import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { TopicContext } from "../../context/TopicContext.tsx";

const AddQuestionsPage = () => {
  const { topicId } = useParams();
  const { topics, addQuestion } = useContext(TopicContext);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [reason, setReason] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (
      question.trim() &&
      options.every((opt) => opt.trim()) &&
      reason.trim()
    ) {
      addQuestion(parseInt(topicId), {
        question,
        options,
        correctAnswer,
        reason,
      });
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer(0);
      setReason("");
    }
  };

  return (
    <div>
      <h1>Add Questions for Topic: {topics[topicId]?.name}</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
        />
      ))}
      <select
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}
      >
        {options.map((_, index) => (
          <option key={index} value={index}>
            Correct Answer {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Enter explanation"
      />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default AddQuestionsPage;
