import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = ({setIsOver}) => {
    const [timer, setTimer] = useState(20);

    const [displayTime, setDisplayTime] = useState('');

    useEffect(()=>{
        const time = setInterval(() =>{
            setTimer((prev) => {
                if(prev <= 0){
                    clearInterval(time);
                    return 0;
                }
                // console.log(prev)
              return  prev - 1;
            })
        }
        , 1000);

        return () => clearInterval(time)
    }, []);

    useEffect(() =>{
        if(timer === 0){
            setIsOver(true)
        }
        const displayTimer = (`${(Math.floor(timer / 60)).toString().padStart(2, 0) } min : ${(Math.floor(timer % 60)).toString().padStart(2, 0)} secs `);
        setDisplayTime(displayTimer)
    }, [timer]);

    
  return (
    <>
      <h2 className='text-[30px] mt-4'>🕒 Remaining Time: {displayTime}</h2>
    </>
  )
}

export default Timer
