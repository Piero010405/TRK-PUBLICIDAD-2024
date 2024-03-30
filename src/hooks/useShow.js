import { useState } from 'react'

export function useShow () {
    const [show, setShow]= useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    const showTrue = () => {
        setShow(true)
    }
    
    return {show, handleClick, showTrue}
}