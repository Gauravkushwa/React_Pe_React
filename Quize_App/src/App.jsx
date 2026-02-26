import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Results from './components/Results'

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1>Quize App </h1>
      {
        isOver ? (
          <>
           <Results score={score}/>
          </>
        ) : (

          <>
          <Timer setIsOver={setIsOver}/>
          <Questions setScore={setScore} setIsOver={setIsOver}/>
          </>
        )
      }
    </>
  )
}

export default App
