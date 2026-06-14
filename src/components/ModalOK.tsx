import style from './style.module.css'

interface ModalOKProps {
    title: string
    description: string
    modalOpen: boolean
}

export default function ModalOK({ title, description, modalOpen }: ModalOKProps) {
    return (
        <>
            <div className={style.modalOverlay}>
                <div className={style.modal}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button ></button>
                </div>
            </div>
        </>
    )
}