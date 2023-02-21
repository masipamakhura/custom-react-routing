import { useState } from "react";
import Dropdown from "./components/DropDown";
import AccordionPage from "./pages/AccodionPage";

function App() {
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
    <div>
      
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}
export default App;
