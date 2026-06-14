import { FaCircle } from "react-icons/fa";
import style from  './style.module.css'

export interface CardBookProps {
    idBook: number,
    title: string,
    read: boolean
}

export default function CardBook({ title, read }: CardBookProps) {
    return (
        <>
            <div className={style.cardBook}>
                <h3>Nome: {title}</h3>
                <div>
                    <FaCircle color={`${read ? 'green' : 'red'}`} />
                    <button>Detalhes</button>
                </div>
            </div>
        </>
    )
}