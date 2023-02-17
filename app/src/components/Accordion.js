import {GoChevronDown,GoChevronLeft} from 'react-icons/go'
import {useState} from 'react';

function Accordion({items}){
    const [expandedIndex,setExpandedIndex] = useState(-1);
     const handleClick = (nextIndex)=>{
       return  nextIndex !== expandedIndex ? setExpandedIndex(nextIndex) : setExpandedIndex(-1)
     }
    const rendereditems = items.map((item ,index)=> {
        const isExpanded = expandedIndex === index;
        const icon = <span className='text-2xl'> { isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    
        return (
           <div key={item.id} >
             <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'  onClick={()=>handleClick(index)} >{item.label} {icon}</div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
           </div>
        )
    })
    


    return <div className='border-x border-t rounded' >{rendereditems}</div>
}
export default Accordion;