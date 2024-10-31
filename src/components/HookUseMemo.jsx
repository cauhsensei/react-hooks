import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    // const premiumNumbers = ["0", "100", "200"] exemplo para multiplos numeros warning

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    }, []) // essa referencia, esse valor vai ficar salvo para sempre, nao tera alteracao mesmo se o componente renderizar mil vezes
           // react nao perde mais tempo fazendo a re-renderizacao dessa variavel


    useEffect(() => {
        console.log("premium numbers foi alterado")

    }, [premiumNumbers]) 

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>acertou o numero!</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo