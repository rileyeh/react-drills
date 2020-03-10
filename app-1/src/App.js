import React, { useState } from 'react'

const App = () => {
  let [input, setInput] = useState('')
  return (
    <>
      <input type='text' onChange={e => setInput(e.target.value)}/>
      <p>{input}</p>
    </>
  )
}

export default App