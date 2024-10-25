import React from "react";

function CardIcon({ Icon, className }) {
  return (
    <div
      className={`rounded-lg bg-gradient-to-tr p-4 flex items-center justify-center max-w-[60px] ${className}`}
    >
      <Icon className="text-white w-8 aspect-square" />
    </div>
  );
}

export default CardIcon;
