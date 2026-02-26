import React from 'react';
import questions from '../DB.json'
import { useState } from 'react';

const Questions = ({setScore, setIsOver}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleClick = (option) =>{
        if(questions[currentIndex].answer === option){
            setScore((prev) => prev + 1)
        }

        if(currentIndex < questions.length - 1){
            setCurrentIndex((prev) => prev + 1)
        }else{
            setIsOver(true)
        };
    }

  return (
    <>
      <h2 className='text-[20px] my-4 '>{questions[currentIndex].question}</h2>
      <div className='grid gap-1 mt-2'>
        {
            questions[currentIndex].options.map((option, idx) => {
                return <button key={idx} onClick={() => {handleClick(option)}} >{option}</button>
            })
        }
      </div>
    </>
  )
}

export default Questions
