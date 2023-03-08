import Link from "./Link";

function Sidebar(){

    const links = [
        {label:"Dropdown",path:'/'},
        {label:"Accordion",path:'/accordion'},
        {label:"Buttons",path:'/buttons'},
        {label:"Modal",path:'/modal'},
        {label:"Table",path:'/table'},
        {label:"Counter",path:'/counter'},
    
    ]

    const renderedList = links.map((link) =>{
        return <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2"  className='mb-4' key={link.label} to={link.path}>{link.label}</Link>
    })

    return (<div className="sticky  top-0 overflow-y-scroll flex flex-col items-start">
            {renderedList}
    </div>);
}

export default Sidebar;