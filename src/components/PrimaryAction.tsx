import style from './style.module.css'

interface ButtonPurpleProps {
    title: string
}

export default function PrimaryAction({ title }: ButtonPurpleProps) {
    return (
        <button className={style.primaryAction}>{title}</button>
    )
}