import style from './style.module.css'

interface ButtonPurpleProps {
    title: string
    disable?: boolean
}

export default function PrimaryAction({ title, disable = false }: ButtonPurpleProps) {
    return (
        <button disabled={disable} className={style.primaryAction}>{title}</button>
    )
}