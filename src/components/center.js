import React,{useState} from 'react';





// 1rem =16px 
const Cal = () => {
    const initialstate="REM";
    const [state, setstate] = useState(initialstate);
    const [placeH, setplaceH] = useState("REM");

    // const topx=(op)=>{
    //     let x=op.target.value*16;
    //     if(x==0){
    //         setstate(initialstate);
    //     }
    //     else{

    //         setstate(x);
    //     }
    // }
    const swap=()=>{
        setstate(initialstate);
        document.getElementById("inp-1").value="";

        if(placeH==="REM"){
            // console.log("chke");
            document.getElementById("heading").innerHTML="REM to PX converter";
            document.getElementById("inp-1").placeholder="REM";
           setplaceH("PX");
           
        }
        else{
           setplaceH("REM");

            document.getElementById("heading").innerHTML="PX to REM converter";
            document.getElementById("inp-1").placeholder="PX";

            

        }
        
    }
    const topx_or_rem=(op)=>{
        if(placeH===initialstate){
            let x=op.target.value*16;
        if(x==0){
            setstate(initialstate);
        }
        else{

            setstate(x);
        }
        }
        else{
            let x=op.target.value/16;
        if(x==0){
            setstate(initialstate);
        }
        else{

            setstate(x);
        }
        }
    }
   
    return (
        <>
            <div className="container-fluid" id="cal">
                <h1 className="container-fluid" id="heading">PX to REM Converter</h1>
                <div className="row">
                    <div className="col-sm-5"><input type="number" className="container-fluid" id="inp-1" placeholder="PX" onChange={topx_or_rem} /></div>
                    <div className="col">
                        {/* <i class="fa-solid fa-arrow-up-arrow-down"></i> */}
                        
                        <i className="fa fa-exchange" onClick={swap} aria-hidden="true"></i>
                        </div> 
                    <div className="col-sm-5"><input type="number" className="container-fluid" placeholder={placeH} value={state}/></div>

                </div>
            </div>
        </>
    )
}

export default Cal;
