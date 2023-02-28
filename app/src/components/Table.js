
function Table({ data, config }) {


    const tableHeading = config.map(heading => {
        if (heading.hasOwnProperty('header')) {
            return heading.header(heading.label)
        } else {
            return <th key={heading.label}>{heading.label}</th>
        }
    })
    const content = data.map((data, i) => {
        return <tr className="border-b" key={data.name}>
            {
                config.map(conf => {
                    return <td className="p-3" key={conf.label}>{conf.render(data)}</td>
                })
            }

        </tr>
    })
    return <table className="table-auto border-spacing-2 ">
        <thead>
            <tr className="border-b-2">
                {tableHeading}
            </tr>
        </thead>
        <tbody>
            {content}
        </tbody>
    </table>
}

export default Table;