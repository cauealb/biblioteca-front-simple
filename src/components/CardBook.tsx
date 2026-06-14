import { FaCircle } from "react-icons/fa";
import style from  './style.module.css'

interface CardBookProps {
    idBook: number,
    title: string,
    read: boolean
}

export default function CardBook({ idBook, title, read }: CardBookProps) {
    return (
        <>
            <div className={style.cardBook}>
                <h3>Nome: {title}</h3>
                <div>
                    {read ? <FaCircle color={`${read ? '#ff5454' : '#82ff54}'`} />'}
                    <button>Detalhes</button>
                </div>
            </div>
        </>
    )
}