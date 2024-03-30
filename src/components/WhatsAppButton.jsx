import { useSearch } from '../hooks/useSearch'
import { useShow } from '../hooks/useShow'
import { phoneNumber } from '../const/const'
import '../components/WhatsAppButton.css'

export function WhatsAppButton () {
    const { search, handleChange } = useSearch()
    const {show, handleClick } = useShow()
    
    return (
        <>
            <div className="whatsapp_chat_support wcs_fixed_right" id="button-w">
                <div className={show ? 'wcs_button_label wcs_button_label_hide' : 'wcs_button_label'}>Escríbenos!</div>
                <button className="wcs_button wcs_button_circle" onClick={handleClick}>
                    <i className="fa uil uil-whatsapp"></i>
                </button>

                <div className={show ? 'wcs-show wcs-effect-1' : 'wcs-effect-1'}>
                    <div className="wcs_popup">
                        <div className="wcs_popup_close" onClick={handleClick}>
                            <i className="fa uil uil-times"></i>
                        </div>
                        <div className="wcs_popup_header">
                            <i className="fa fa-whatsapp uil-whatsapp"></i>
                            <strong>TRK Publicidad</strong>

                            <div className="wcs_popup_header_description">
                                ¿Necesitas ayuda? Mándanos un mensaje a nuestro Whatsapp
                            </div>
                        </div>

                        <div
                        className="wcs_popup_input"
                        data-number="+51 990346291"
                        data-availability='{ "monday":"07:00-22:30", "tuesday":"07:00-22:30", "wednesday":"07:7030-22:30", "thursday":"07:00-22:30", "friday":"07:00-22:30", "saturday":"07:00-22:30", "sunday":"07:00-22:30" }'
                        >
                            <input type="text" placeholder="Escribenos!" onChange={handleChange} name='query' value={search}/>
                            <a href={`https://wa.me/${phoneNumber}?text=${search}`} target='_blank'><i className="fa uil uil-play"></i></a>
                        </div>
                        <div className="wcs_popup_avatar">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_k6g_ju7hvTkj628kgaAFjDCY4AmXb11rKzRMfqtxOw&s"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}