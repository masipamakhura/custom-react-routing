import {useState,useEffect} from 'react';  

    
    function Counter(){
                const [counter ,setCounter] = useState(0);

                useEffect(()=>{
                    console.log("hi there ")
                },[counter])

                const increment = ()=>{
                setCounter(counter + 1);
                }

                const decrement = ()=>{
                    setCounter(counter -1)
                }
    
    return {counter,decrement,increment}
    }

export default Counter;