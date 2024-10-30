import React, { useState } from 'react'

const HookUseState = () => {
    let userName = "Cauane"

    const [name, setName] = useState("Matheus")
    const [age, setAge] = useState(18)

    const changeNames = () => {

        userName = "Cauane Cardoso"

        setName("Matheus Battisti")

        console.log(name)
        console.log(userName)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

  return (
    <div>
        <h2>useState:</h2> 
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes!</button>
        
        {/* formulario */}
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
        <p>voce tem {age} anos!</p>
        <hr/>
    </div>
  )
}

export default HookUseState