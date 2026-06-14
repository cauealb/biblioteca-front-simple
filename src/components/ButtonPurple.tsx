import style from './style.module.css'

interface ButtonPurpleProps {
    title: string
}

export default function ButtonPurple({ title }: ButtonPurpleProps) {
    return (
        <>
            <button className={style.buttonPurple}>{title}</button>
        </>
    )
}