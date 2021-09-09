import React,{useReducer,useState,useEffect} from 'react';
const reducer=(state,action)=>{
    if(action.type==="inc"){
         state=new Date().toLocaleTimeString();
        document.title=`${state}`;

    }
    return state;
}

const Main = () => {
    let time=new Date().toLocaleTimeString();
    const [state, setstate] = useState(time);
    // const [state, dispatch] = useReducer(reducer, new Date().toLocaleTimeString());
    useEffect(() => {
       console.log({time});
    },[]);
    setInterval(() => {
        time=new Date().toLocaleTimeString();
        setstate(time);
        // dispatch({type:"inc"});
    }, 1000);
    return (
        <>
        <p className="container-fluid" id="time">{state} </p>
            
        </>
    )
}

export default Main
