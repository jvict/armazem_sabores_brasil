import { useRouter } from "next/router";
import { useState } from "react";


export const Form = () => {
    const [eventName, setEventName] = useState('');
    const [finishPrevisionDate, setFinishPrevisionDate] = useState('');
    const route = useRouter()
    return (
        <>
            <div className="container-form">
                <div className="form-header">
                    <p>Adiocionar um evento</p>
                    <input type="text" placeholder="Nome do evento"
                        value={eventName} onChange={e => setEventName(e.target.value)} />

                    <input type='text' placeholder="Data do evento" onFocus={(e) => { e.target.type = "date" }} onBlur={(e) => e.target.type = "text"}
                        value={finishPrevisionDate} onChange={e => setFinishPrevisionDate(e.target.value)} />

                </div>

                <div className="form-footer">
                    <button onClick={() => route.back()}>Voltar</button>
                </div>
            </div>
        </>
    )
}