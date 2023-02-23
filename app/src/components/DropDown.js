import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (ev) => {
      if (!divEl.current.contains(ev.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, false);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionsClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderdOptions = options.map((option) => (
    <div
      className="hover:bh-sky-100 rounded cursor-pointer p-1"
      key={option.value}
      onClick={() => handleOptionsClick(option)}
    >
      <div>{option.label}</div>
    </div>
  ));

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between item-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderdOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
