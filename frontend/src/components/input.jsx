import React from "react";

function Input({ handleAddItem, inputValue, setInputValue }) {
  return (
    <div className="w-full">
      <form onSubmit={handleAddItem} className="relative">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 h-[56px] px-5 text-base font-normal bg-white border-2 rounded-[14px] focus:outline-none placeholder:font-normal"
            style={{
              fontSize: "16px",
              color: "#18181b",
              borderColor: "#e4e4e7",
              transition: "all 0.2s ease-in-out",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6366f1";
              e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e4e4e7";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            className="h-[56px] px-8 font-semibold rounded-[14px] focus:outline-none"
            style={{
              fontSize: "15px",
              backgroundColor: "#6366f1",
              color: "white",
              transition: "all 0.2s ease-in-out",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#4f46e5";
              e.target.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#6366f1";
              e.target.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
            }}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
