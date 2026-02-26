import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-3">
      <UserProfile />
      {/* <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile /> */}
      </div>
    </>
  )
}

export default App
