import { SampleEmail } from "../emails/SampleEmail";
import "../components/ContactForm.css"
import { useState } from "react";
import { render } from "@react-email/render";
import { Modal } from "./Modal";

export function ContactForm() {
    const [modal, setModal] = useState({ show: false, error: false })
    const [modalKey, setModalKey] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { name, email, message } = Object.fromEntries(formData)

        const finalHTML = render(<SampleEmail authorName={name as string} authorEmail={email as string} reviewText={message as string} />, {
            pretty: true,
        })

        const finalText = render(<SampleEmail authorName={name as string} authorEmail={email as string} reviewText={message as string} />, {
            plainText: true,
        })

        try {
            const res = await fetch("api/sendEmail.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: "onboarding@resend.dev",
                    to: "administracion@trkpublicidad.com",
                    subject: `|| ${name} ha dejado un mensaje ||`,
                    html: finalHTML,
                    text: finalText
                }),
            });
            const data = await res.json()
            setModal({ show: true, error: false })
            setModalKey((prevKey) => prevKey + 1)
            setName('')
            setEmail('')
            setMessage('')
        } catch (e) {
            console.error(e)
            setModal({ show: true, error: true })
            setModalKey((prevKey) => prevKey + 1)
        }
    }

    return (
        <>
            {
                modal.show && (
                    modal.error ? <Modal key={modalKey} initialShow={true} error={true} />
                        : <Modal key={modalKey} initialShow={true} error={false} />)
            }
            <div className="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                ><path
                    fill="#ffff4d"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                </svg>

                <article id="contact">
                    <section>
                        <div className="article-content">
                            <div className="contact-container-wrap">
                                <form
                                    className="custom-form contact-form"
                                    role="form"
                                    onSubmit={handleSubmit}
                                >
                                    <header className="form-text">
                                        <small className="small-title">Contacto</small>

                                        <h2>Envíanos un mensaje</h2>
                                    </header>

                                    <aside>
                                        <div className="flex-part">
                                            <div className="input-wrap focus not-empty">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required
                                                    value={name}
                                                    onChange={handleNameChange}
                                                />
                                                <label>Nombres</label>
                                                <i className="icon uil uil-user-square"></i>
                                            </div>

                                            <div className="input-wrap focus not-empty">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    className="form-control"
                                                    required
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                                <label>Email</label>
                                                <i className="icon uil uil-envelope-question"></i>
                                            </div>
                                        </div>

                                        <div className="input-wrap textarea focus not-empty">
                                            <textarea
                                                className="form-control"
                                                rows={7}
                                                id="message"
                                                name="message"
                                                required
                                                value={message}
                                                onChange={handleMessageChange}
                                            >
                                            </textarea>
                                            <label>Mensaje</label>
                                            <i className="icon uil uil-inbox"></i>
                                        </div>

                                        <input type="submit" className="form-control" value={'ENVIAR'}></input>
                                    </aside>
                                </form>
                            </div>

                            <div className="contact-thumb">
                                <div className="contact-info">
                                    <h3>AV. Los Próceres #720, Lima, Perú</h3>
                                    <div>
                                        <h4>
                                            <a href="tel:+01 963 834 127">
                                                <i className="uil uil-phone contact-icon me-2"></i>
                                                963 834 127
                                            </a>
                                        </h4>
                                        <h4>
                                            <a
                                                href="mailto:administracion@trkpublicidad.com"
                                                className="footer-link"
                                            >
                                                <i className="uil uil-envelope contact-icon me-2"></i>
                                                administracion@trkpublicidad.com
                                            </a>
                                        </h4>
                                    </div>

                                    <div className="google-map-content">
                                        <iframe
                                            className="google-map mt-4"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.350869035347!2d-76.99246892593312!3d-12.156498743951529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b838dc8c667f%3A0x163a736eeaeaa62e!2sAv.%20Los%20Pr%C3%B3ceres%2C%20Santiago%20de%20Surco!5e0!3m2!1ses!2spe!4v1689691648972!5m2!1ses!2spe"
                                            height="300"
                                            loading="lazy"
                                        >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </>
    )
}