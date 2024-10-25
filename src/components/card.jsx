import React from "react";

function Card({ children }) {
  return (
    <div className="bg-gradient-to-tr from-slate-900 p-6 aspect-video rounded-xl shadow-md to-slate-800 max-w-[412px]">
      {children}
    </div>
  );
}

export default Card;
