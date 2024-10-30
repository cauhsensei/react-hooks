import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)
    const [text, setText] = useState("")

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setText("")

        inputRef.current.focus()
    }

  return (
    <div>
        <h2>useRef</h2>
        <p>o componente renderizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>contador A</button>
        <p>Counter B: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>contador B</button>

        {/* useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={inputRef} 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef