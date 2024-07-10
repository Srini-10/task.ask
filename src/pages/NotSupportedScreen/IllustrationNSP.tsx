import React from "react";

export function Illustration(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 145" {...props}>
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="100px"
        fontFamily="Arial"
        fill="currentColor"
        fontWeight="bolder"
      >
        ERROR
      </text>
    </svg>
  );
}
