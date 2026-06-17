import style from './style.module.css'
import { CgDanger } from "react-icons/cg";

interface ModalAttentionProps {
    title: string
    description: string
    modalOpen: boolean
}

export default function ModalAttention({ title, description, modalOpen }: ModalAttentionProps) {
    if(modalOpen) {
             return (
            <div className={style.modalOverlay}>
                <div className={style.modal}>
                    <div>
                        <CgDanger size={60} />
                        <h1>{title}</h1>
                    </div>

                    <p>{description}</p>
                </div>
            </div>
        )
    }
}