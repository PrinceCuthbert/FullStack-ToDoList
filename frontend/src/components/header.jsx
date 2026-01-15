import React from "react";

function Header() {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1
        className="text-4xl font-bold mb-2 tracking-tight"
        style={{ fontFamily: "'Inter', sans-serif", color: "#18181b", letterSpacing: "-0.02em" }}>
        Organize your tasks
      </h1>
      <p className="text-base font-normal" style={{ color: "#71717a" }}>
        Stay productive and organized
      </p>
    </div>
  );
}

export default Header;
