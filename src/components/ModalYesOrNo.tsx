import { Link } from 'react-router-dom'
import styles from './style.module.css'
import PrimaryAction from './PrimaryAction'

interface ModalYesOrNoProps {
    header: string,
    question: string,
    modalOpen: boolean
    isClose: () => void
}

export default function ModalYesOrNo({ header, question, modalOpen, isClose }: ModalYesOrNoProps) {
    if(modalOpen) {
        return (
            <>
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <h1>{header}</h1>
                    <p>{question}</p>
                    <div className={styles.inputsBtn}>
                        <Link to="/">
                            <button className={styles.btnYes}>Sim</button>
                        </Link>
                        <div onClick={isClose}>
                            <PrimaryAction title='Não' />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}