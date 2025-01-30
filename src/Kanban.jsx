import React, { useState } from "react";
// import "./styles.css"; // Assuming you have the CSS in a separate file

const Kanban = () => {
  const [dragged, setDragged] = useState(null);

  const handleDragStart = (e) => {
    setDragged(e.target);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (dragged && e.target.className === "parent") {
      e.target.appendChild(dragged);
    }
  };

  return (
    <div>
      <div
        className="parent"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "none",
          padding: "10px",
          height: "50vh",
          width: "20vw",
          backgroundColor: "blue",
        }}
      ></div>
      <div
        className="child"
        draggable="true"
        onDragStart={handleDragStart}
        style={{
          border: "none",
          padding: "10px",
          height: "30vh",
          width: "10vw",
          backgroundColor: "rgb(215, 185, 18)",
        }}
      ></div>
    </div>
  );
};

export default Kanban
