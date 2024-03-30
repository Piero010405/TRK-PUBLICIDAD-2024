import { useEffect, useRef } from "react"
import Typed from "typed.js"


export function MultiText () {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["ingenio", "publicidad", "TRK"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
        })

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <>
            <span style={multiText} ref={el}></span>
        </>
    )
}

const multiText = {
    color: "#131917",
    textTransform: "capitalize",
}