import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config } = props;
    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        } else {
            return {
                ...column,
                header: (key) => <th onClick={() => handleClick(column.label)} key={key} className="bg-red-500" >{column.label} id editable</th>
            }
        }
    })
    
    return <div><Table {...props} config={updatedConfig} /></div>

}
export default SortableTable;