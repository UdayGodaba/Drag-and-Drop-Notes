/* eslint-disable react/prop-types */
const Note = ({ note, positions }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "5px",
        position: "absolute",
        left: `${positions?.x}px`,
        top: `${positions?.y}px`,
        height: "75px",
        width: "250px",
        padding: "1%",
        userSelect: "none",
        backgroundColor: "#fffdc7",
        cursor: "move",
      }}
    >
      📌{note?.text}
    </div>
  );
};

export default Note;
