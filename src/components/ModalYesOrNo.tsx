import styles from './style.module.css'

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
                        <button>Sim</button>
                        <button onClick={isClose}>Não</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}