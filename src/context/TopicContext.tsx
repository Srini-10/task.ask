import React, { createContext, useState } from "react";

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);

  const addTopic = (name) => {
    setTopics((prevTopics) => [...prevTopics, { name, questions: [] }]);
  };

  const addQuestion = (topicId, question) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic, index) =>
        index === topicId
          ? { ...topic, questions: [...topic.questions, question] }
          : topic
      )
    );
  };

  return (
    <TopicContext.Provider value={{ topics, addTopic, addQuestion }}>
      {children}
    </TopicContext.Provider>
  );
};
