import { useEffect, useState } from "react";

function Timer({time,setEndTimer}){
    const [seconds,setSeconds]=useState(59);
    const [minutes,setMinutes]=useState(time);

     useEffect(()=>{
        let timer = setInterval(() => {
            setSeconds( seconds-1 );
            if( minutes===0 && seconds===0 ){
                setSeconds(0);
                setMinutes(0);
                setEndTimer(true);
                clearInterval(timer);
            }else{
                if(seconds===0){
                  setMinutes(minutes-1);
                  setSeconds(59);
                  setEndTimer(false);
                }
            } 
        },1000);
        return ()=> clearInterval(timer);
    });
    
    return (
        <div className="container-timer">
            <h2>{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</h2>
        </div>
    )
}

export default Timer;