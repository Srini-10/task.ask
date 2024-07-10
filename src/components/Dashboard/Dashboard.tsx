import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContainerContext } from "../../context/ContainerContext.tsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const { containers, addContainer, removeContainer, error } =
    useContext(ContainerContext);
  const [newContainer, setNewContainer] = useState({
    title: "",
    links: [],
    question: "", // Add question state
    options: [], // Add options state
    reason: "", // Add reason state
  });
  const [newLink, setNewLink] = useState({ to: "", label: "" });
  const [linkCount, setLinkCount] = useState(0);

  const handleAddLink = () => {
    if (newLink.to && newLink.label) {
      setNewContainer({
        ...newContainer,
        links: [...newContainer.links, { ...newLink }],
      });
      setNewLink({ to: "", label: "" });
      setLinkCount(linkCount + 1);
    } else {
      alert("Please enter both URL and Label for the link.");
    }
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...newContainer.links];
    updatedLinks.splice(index, 1);
    setNewContainer({ ...newContainer, links: updatedLinks });
    setLinkCount(linkCount - 1);
  };

  const handleRemoveContainer = async (id) => {
    try {
      await removeContainer(id); // Call removeContainer from context
    } catch (error) {
      console.error("Error removing container:", error);
      // Handle error display or logging as needed
    }
  };

  const handleAddContainer = () => {
    if (
      newContainer.title.trim() &&
      newContainer.links.length > 0 &&
      newContainer.question.trim() &&
      newContainer.options.length > 0 &&
      newContainer.reason.trim()
    ) {
      addContainer(newContainer);
      setNewContainer({
        title: "",
        links: [],
        question: "",
        options: [],
        reason: "",
      });
      setLinkCount(0);
      // Navigate to the newly created topic page
      navigate(`/dashboard/${encodeURIComponent(newContainer.title)}`);
    } else {
      alert(
        "Please enter a title, add at least one link, and provide a question with options and reason."
      );
    }
  };

  return (
    <>
      <div className="home-container min-w-full min-h-full mt-[68px]">
        <div className="grid grid-cols-3 grid-row-5 gap-5">
          {containers.map((container, index) => (
            <div
              key={index}
              className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]"
            >
              <h1 className="font-semibold Text-Blue text-[20px]">
                {container.title}
              </h1>
              <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
                {container.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-gray items-center flex">
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <button
                className="mt-3 bg-red-500 hover:bg-red-600 text-white py-1 px-3 text-[13px] rounded"
                onClick={() => handleRemoveContainer(container._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* New Container Form */}
      <div className="flex-1 w-[600px] -mt-[160px] pb-10">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4">Add New Container</h2>
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <input
            type="text"
            placeholder="Container Title"
            value={newContainer.title}
            onChange={(e) =>
              setNewContainer({ ...newContainer, title: e.target.value })
            }
            className="w-full border-gray-300 border-1 rounded-md py-2 px-3 mb-3"
          />
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg mb-2">Add Links</h3>
            <p className="mt-1 text-gray-500 text-[14px]">
              Total Links Added: {linkCount}
            </p>
          </div>
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              placeholder="Link URL"
              value={newLink.to}
              onChange={(e) => setNewLink({ ...newLink, to: e.target.value })}
              className="flex-1 border-gray-300 border-1 rounded-md py-2 px-3"
            />
            <input
              type="text"
              placeholder="Link Label"
              value={newLink.label}
              onChange={(e) =>
                setNewLink({ ...newLink, label: e.target.value })
              }
              className="flex-1 border-gray-300 border-1 rounded-md py-2 px-3"
            />
            <button
              className="bg-[#399fff] hover:bg-[#3290e8] text-white py-2 px-4 rounded-md"
              onClick={handleAddLink}
            >
              Add Link
            </button>
          </div>

          {newContainer.links.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">Added Links:</h4>
              <ul className="text-[13px] grid grid-cols-1 leading-6 ml-2">
                {newContainer.links.map((link, index) => (
                  <li key={index} className="text-gray items-center flex">
                    <Link to={link.to}>{link.label}</Link>
                    <button
                      className="ml-2 text-red-600 hover:text-red-700"
                      onClick={() => handleRemoveLink(index)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Question and Details Form */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Question"
              value={newContainer.question}
              onChange={(e) =>
                setNewContainer({ ...newContainer, question: e.target.value })
              }
              className="w-full border-gray-300 border-1 rounded-md py-2 px-3 mb-3"
            />
            <input
              type="text"
              placeholder="Options (comma-separated)"
              value={newContainer.options.join(",")}
              onChange={(e) =>
                setNewContainer({
                  ...newContainer,
                  options: e.target.value
                    .split(",")
                    .map((option) => option.trim()),
                })
              }
              className="w-full border-gray-300 border-1 rounded-md py-2 px-3 mb-3"
            />
            <input
              type="text"
              placeholder="Reason"
              value={newContainer.reason}
              onChange={(e) =>
                setNewContainer({ ...newContainer, reason: e.target.value })
              }
              className="w-full border-gray-300 border-1 rounded-md py-2 px-3 mb-3"
            />
          </div>

          <button
            className={`bg-[#48ce18] hover:bg-[#48bf1d] text-white py-2 px-4 rounded-md mt-4 ${
              !newContainer.title.trim() ||
              newContainer.links.length === 0 ||
              !newContainer.question.trim() ||
              newContainer.options.length === 0 ||
              !newContainer.reason.trim()
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleAddContainer}
            disabled={
              !newContainer.title.trim() ||
              newContainer.links.length === 0 ||
              !newContainer.question.trim() ||
              newContainer.options.length === 0 ||
              !newContainer.reason.trim()
            }
          >
            Add Container
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
