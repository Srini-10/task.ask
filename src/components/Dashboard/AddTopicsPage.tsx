import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TopicContext } from "../../context/TopicContext.tsx"; // Ensure the path is correct

const AddTopicsPage = () => {
  const [newTopic, setNewTopic] = useState("");
  const { topics, addTopic } = useContext(TopicContext);

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      addTopic(newTopic);
      setNewTopic("");
    }
  };

  return (
    <div>
      <h1>Add Topics</h1>
      <input
        type="text"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
        placeholder="Enter topic name"
      />
      <button onClick={handleAddTopic}>Add Topic</button>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <Link to={`/topic/${index}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTopicsPage;
