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
                <div className={styles.modal}>
                    <h1>{header}</h1>
                    <p>{question}</p>
                    <div>
                        <button>Yes</button>
                        <button onClick={isClose}>No</button>
                    </div>
                </div>
            </>
        )
    }
    
}