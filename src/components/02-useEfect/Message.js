import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords


    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {
                x: e.x,
                y: e.y
            }

            setCoords(coors)

        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)

        }
    }, [])

    return (
        <>
            <h3 className="text-center">The cordinate ARE:</h3>
            <p className="text-center">x:{x} | y:{y}</p>
        </>
    )
}
