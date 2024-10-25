import classNames from "classnames";
import React, { useState } from "react";

interface SwitchProps {
  checked: boolean;
  uncheckedLabel: string;
  checkedLabel: string;
  handleToggle: (state: boolean) => void;
}

export default function SwitchSearchExplore({
  checked,
  uncheckedLabel,
  checkedLabel,
  handleToggle,
}: SwitchProps) {
  const [checkedState, setCheckedState] = useState(checked);
  const handleClick = (state: boolean) => {
    handleToggle(state);
    setCheckedState(state);
  };
  return (
    <div className="mx-auto flex-none items-center justify-center">
      <label className="bg-white rounded-full relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only bg-white "
          checked={checkedState}
          onChange={(e) => {
            const currentState = e.currentTarget.checked;
            handleClick(currentState);
          }}
        />
        <span
          data-unchecked-label={uncheckedLabel}
          data-checked-label={checkedLabel}
          className="text-white h-11 w-52 rounded-full border-2 border-white bg-slate-500 after:absolute after:left-0.5 after:top-[2px] after:h-10 after:w-28 after:rounded-full  after:bg-primary after:text-center after:transition after:content-[attr(data-unchecked-label)] peer-checked:after:translate-x-[92px] peer-checked:after:border-gray-700 after:leading-[2.5rem]  peer-checked:after:content-[attr(data-checked-label)]"
        >
          <label
            className={classNames(
              "mt-2 block cursor-pointer select-none text-secondary",
              checkedState ? "ml-6 text-left" : "mr-5 text-right "
            )}
            onClick={() => handleClick(!checkedState)}
          >
            {checkedState ? uncheckedLabel : checkedLabel}
          </label>
        </span>
      </label>
    </div>
  );
}
