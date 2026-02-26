
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './redux/action/addToProduct'

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  return (
    <>
      <h1 className='bg-amber-400'>Welcome to Redux..!</h1>
      <button onClick={() =>dispatch(addProduct())}>ADD </button>
    </>
  )
}

export default App
