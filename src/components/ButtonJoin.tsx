import style from './style.module.css'

interface ButtonJoinProps {
    title: string
}

export default function ButtonJoin({ title }: ButtonJoinProps) {
    return (
        <>
            <button className={style.btn}>
                {title}
            </button>
        </>
    )
}