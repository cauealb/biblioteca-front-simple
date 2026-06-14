import { FaCircle } from "react-icons/fa";
import style from  './style.module.css'

export interface CardBookProps {
    idBook: number,
    title: string,
    read: boolean,
    modalOpen?: () => void
}

export default function CardBook({ title, read, modalOpen }: CardBookProps) {
    return (
        <>
            <div className={style.cardBook}>
                <h3>Nome: {title}</h3>
                <div>
                    <FaCircle color={`${read ? 'green' : 'red'}`} />
                    <button onClick={modalOpen}>Detalhes</button>
                </div>
            </div>
        </>
    )
}