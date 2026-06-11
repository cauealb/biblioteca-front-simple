import { useState } from 'react';
import styles from './style.module.css'
import { FaUser } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import ModalYesOrNo from '../../components/ModalYesOrNo';

export default function DashboardPages() {
    const [modal, setModal] = useState<boolean>(false)

    function handleModalOpen() {
        setModal(true)
    }

    function handleModalClose() {
        setModal(false)
    }

    return(
        <>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <div className={styles.navSidebar}>
                        <div className={styles.contentuser}>
                            <FaUser />
                            <h2>Olá, Cauê</h2>
                        </div>

                        <nav className={styles.options}>
                            <a href="">Dashboard</a>
                            <a href="">Livros</a>
                            <a href="">Bookcase</a>
                            <a href="">Configurações</a>
                        </nav>

                    </div>
                    
                    <div onClick={handleModalOpen} className={styles.exit}>
                        <IoIosExit size={28} />
                        <h3>Sair</h3>
                    </div>
                </aside>

                <div className={styles.content}>
                    <h1>Conteúdo</h1>
                </div>
            </div>

            <ModalYesOrNo 
                header='Deseja Sair?' 
                question='Ao selecionar em sair, seu sistema será fechado e só retornará quando fazer seu login.' 
                modalOpen={modal}
                isClose={handleModalClose} 
            />
        </>
    )
}