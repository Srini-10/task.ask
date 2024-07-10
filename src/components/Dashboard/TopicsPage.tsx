import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TopicContext } from "../../context/TopicContext.tsx";

const TopicsPage = () => {
  const { topics } = useContext(TopicContext);

  return (
    <div>
      <h1>Topics Page</h1>
      {topics.map((topic, index) => (
        <div key={index}>
          <Link to={`/topic/${index}`}>
            <h3>{topic.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopicsPage;
