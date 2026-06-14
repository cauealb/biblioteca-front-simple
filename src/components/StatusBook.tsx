import style from './style.module.css'

interface StatusBookProps {
    status: string
}

export default function StatusBook({ status }: StatusBookProps) {
    return (
        <p className={`${style.status} ${status === 'Lido' ? style.statusRead : status === 'Pendente' ? style.statusUnread : style.statusReading }`}>{status}</p>
    )
}