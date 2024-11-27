import { useState } from 'react'
import User from './Components/User'
import UserCard from './Components/UserCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard />
    </>
  )
}

export default App
