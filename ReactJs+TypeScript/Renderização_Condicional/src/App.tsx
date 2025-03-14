import { useState } from 'react'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false)
  
  return (
    <div>
      <button onClick={() => setSigned(true)}>Login</button>
      <button onClick={() => setSigned(false)}>logout</button> 

      {signed ? (
        <h1>Bem-vindo William</h1>
      ):(
        <h1>Sem user</h1>
      ) }

      {signed && (
        <div>
          <p>You have a new message</p> 
        </div>
      )}
    </div>
  )
}

export default App
