import React from 'react'

export const PokeGridItem = ({ name, url }) => {
    return (
        <tr className="gi">
            <td>{name}</td>
            <td>{url}</td>
        </tr>
    )
}
