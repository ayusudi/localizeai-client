import React, { useEffect, useState } from "react";

interface SwitchProps {
  checked: boolean; // External controlled prop
  uncheckedIcon: JSX.Element; // Unchecked icon (gray)
  checkedIcon: JSX.Element; // Checked icon (white)
  handleToggle: (state: boolean) => void; // Function to handle toggle
}

export default function SwitchIcon({
  checked,
  uncheckedIcon,
  checkedIcon,
  handleToggle,
}: SwitchProps) {
  const [checkedState, setCheckedState] = useState(checked); // Local state for checked status

  const handleClick = (state: boolean) => {
    handleToggle(state); // Call the parent handler
    setCheckedState(state); // Update local state
  };

  return (
    <div className="relative mx-auto my-4 flex-none items-center justify-center">
      <label className=" rounded-full  inline-flex cursor-pointer items-center border border-gray-200">
        <input
          readOnly
          type="checkbox"
          className="peer sr-only"
          checked={checkedState}
        />
        <span className="text-white h-11 w-24 rounded-full border-2 border-white bg-slate-500 after:absolute after:left-0.5 after:top-[2.5px] after:h-10 after:w-12 after:rounded-full after:bg-primary after:transition peer-checked:after:translate-x-[44px] peer-checked:after:border-gray-700">
          <span
            onClick={() => {
              handleClick(!checkedState);
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Render both icons with conditional styling */}
            <span className={`relative z-10 block bottom-4`}>
              {React.cloneElement(uncheckedIcon, {
                fill: !checkedState ? "white" : "gray", // Unchecked icon in gray
              })}
            </span>
            <span className={`relative z-10 block bottom-4`}>
              {React.cloneElement(checkedIcon, {
                fill: checkedState ? "white" : "gray",
              })}
            </span>
          </span>
        </span>
      </label>
    </div>
  );
}
