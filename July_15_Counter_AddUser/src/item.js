import React from 'react'

const Item = ({elem, idx, removeNumber}) => {
    return(
        <div>
            <li key = {idx} onClick = {() => removeNumber(elem)}>{elem}</li>
        </div>
    )
}

export default Item