import React from "react";

function List({
  items,
  handleDeleteItem,
  editingIndex,
  editValue,
  setEditValue,
  handleStartEdit,
  handleSaveEdit,
  handleCancelEdit,
}) {
  return (
    <div className="rounded-[16px] overflow-hidden" style={{ border: "1px solid #e4e4e7" }}>
      {items.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white">
          <div className="text-5xl mb-4">📝</div>
          <p className="font-medium" style={{ color: "#71717a", fontSize: "15px" }}>
            No tasks yet. Add one to get started!
          </p>
        </div>
      ) : (
        <ul className="">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-6 animate-slide-up bg-white"
              style={{
                animationDelay: `${index * 0.05}s`,
                borderBottom: index < items.length - 1 ? "1px solid #f4f4f5" : "none",
                paddingTop: "20px",
                paddingBottom: "20px",
                transition: "all 0.2s ease-in-out"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#fafafa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 px-4 py-3 text-base bg-white border-2 rounded-[10px] focus:outline-none"
                    style={{
                      fontSize: "15px",
                      color: "#18181b",
                      borderColor: "#e4e4e7",
                      transition: "all 0.2s ease-in-out"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6366f1";
                      e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e4e4e7";
                      e.target.style.boxShadow = "none";
                    }}
                    autoFocus
                  />

                  <div className="flex ml-4" style={{ gap: "12px" }}>
                    <button
                      onClick={handleSaveEdit}
                      className="px-4 py-2.5 font-medium rounded-[10px] focus:outline-none"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#dcfce7",
                        color: "#15803d",
                        transition: "all 0.2s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#bbf7d0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#dcfce7";
                      }}
                      onMouseDown={(e) => {
                        e.target.style.transform = "scale(0.97)";
                      }}
                      onMouseUp={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}>
                      Save
                    </button>

                    <button
                      onClick={handleCancelEdit}
                      className="px-4 py-2.5 font-medium rounded-[10px] focus:outline-none"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#f1f5f9",
                        color: "#475569",
                        transition: "all 0.2s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e2e8f0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f1f5f9";
                      }}
                      onMouseDown={(e) => {
                        e.target.style.transform = "scale(0.97)";
                      }}
                      onMouseUp={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center flex-1" style={{ gap: "14px" }}>
                    <div 
                      className="flex items-center justify-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #d4d4d8",
                        transition: "all 0.2s ease-in-out",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#6366f1";
                        e.currentTarget.style.backgroundColor = "#ede9fe";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#d4d4d8";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}>
                    </div>
                    <span className="font-normal" style={{ fontSize: "15px", color: "#18181b" }}>
                      {item.taskText}
                    </span>
                  </div>

                  <div className="flex" style={{ gap: "12px" }}>
                    <button
                      onClick={() => handleStartEdit(index)}
                      className="px-4 py-2.5 font-medium rounded-[10px] focus:outline-none"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#dbeafe",
                        color: "#1e40af",
                        transition: "all 0.2s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#bfdbfe";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#dbeafe";
                      }}
                      onMouseDown={(e) => {
                        e.target.style.transform = "scale(0.97)";
                      }}
                      onMouseUp={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}>
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="px-4 py-2.5 font-medium rounded-[10px] focus:outline-none"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#fee2e2",
                        color: "#b91c1c",
                        transition: "all 0.2s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#fecaca";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#fee2e2";
                      }}
                      onMouseDown={(e) => {
                        e.target.style.transform = "scale(0.97)";
                      }}
                      onMouseUp={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
