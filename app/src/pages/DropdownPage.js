import { useState } from "react";
import Dropdown from "../components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    console.log("set selected option", option);
    setSelection(option);
    console.log("selected option VALUE", selection)
  };
  const options = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];
  return (
    <div className="flex">
      
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}
export default DropDownPage;
