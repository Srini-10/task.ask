import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [containers, setContainers] = useState([]);
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5004/api/containers"
        );
        setContainers(response.data);
      } catch (error) {
        setError("Failed to fetch containers."); // Set error state if fetching fails
        console.error("Network Error:", error);
      }
    };

    fetchContainers();
  }, []);

  const addContainer = async (newContainer) => {
    try {
      const response = await axios.post(
        "http://localhost:5004/api/containers",
        newContainer
      );
      setContainers([...containers, response.data]);
      setError(null); // Clear any previous error
    } catch (error) {
      setError("Failed to add container."); // Set error state in case of failure
      console.error("Network Error:", error);
    }
  };

  const removeContainer = async (id) => {
    try {
      await axios.delete(`http://localhost:5004/api/containers/${id}`);
      setContainers(containers.filter((container) => container._id !== id));
      setError(null); // Clear any previous error
    } catch (error) {
      setError("Failed to remove container."); // Set error state in case of failure
      console.error("Network Error:", error);
    }
  };

  return (
    <ContainerContext.Provider
      value={{ containers, addContainer, removeContainer, error }}
    >
      {children}
    </ContainerContext.Provider>
  );
};
