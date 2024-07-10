import React from "react";

function Logout() {
  const handleLogout = async () => {
    try {
      // Implement logout logic as needed
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
