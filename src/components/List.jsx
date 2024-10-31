import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {
    const [myItems, setMyitems] = useState([])

    useEffect(() => {
        console.log("buscando items do db..")

        setMyitems(getItems)
    }, [getItems])

  return (
    <div>
        {myItems.map((item) => 
            <p key={item}>{item}</p>
        )}
    </div>
  )
}

export default List