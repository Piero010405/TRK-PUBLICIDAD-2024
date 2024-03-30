import { useShow } from "../hooks/useShow"
import { useEffect, useState } from "react"
import "../components/Modal.css"

export function Modal ({ initialShow, error }) {
    const {show, handleClick, showTrue } = useShow()

    useEffect(() => {
        if (initialShow) {
            showTrue()
        }
    }, [initialShow])

    return (
        <>
        <section className={show ? 'overlay active' : 'overlay'}>
            <article className={error ? 'modal modal-error' : 'modal modal-succes'}>
                <header>
                    <h1>{error ? 'Error' : 'Mensaje Enviado'}</h1>
                </header>
                <aside>
                    <div className={error ? 'error' : 'success'}>
                        {error ? (<svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="icon icon-tabler icon-tabler-xbox-x"  
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    fill="none" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><path d="M9 8l6 8" /><path d="M15 8l-6 8" />
                                  </svg>)
                                : (<svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="icon icon-tabler icon-tabler-circle-check" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    fill="none" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" />
                                   </svg>)}
                        </div>
                    <p className={error ? 'error' : 'success'}>{error ? 'Ocurrio un error al enviar el mensaje'
                              : 'Mensaje enviado exitosamente!'}</p>
                </aside>
                <footer>
                    <button onClick={handleClick}>Cerrar</button>
                </footer>
            </article>
        </section>
        </>
    )
}