// salvar o valor o valor anterior de um state caso a gente quissesse utilizar isso de alguma forma em algum local

import { useEffect, useRef } from "react"

export const usePrevious = (value) => {
    const ref = useRef

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}

