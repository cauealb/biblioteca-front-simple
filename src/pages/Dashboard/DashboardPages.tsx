import { useState } from 'react';
import styles from './style.module.css'
import { FaUser } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import ModalYesOrNo from '../../components/ModalYesOrNo';
import { Link, Outlet } from 'react-router-dom';

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
                            <Link to="/dashboard/best-books">
                                Livros
                            </Link>
                            <Link to="/dashboard/my-bookcase">
                                Bookcase
                            </Link>
                            <Link to="/dashboard/config">
                                Configurações
                            </Link>
                        </nav>

                    </div>
                    
                    <div onClick={handleModalOpen} className={styles.exit}>
                        <IoIosExit size={28} />
                        <h3>Sair</h3>
                    </div>
                </aside>

                <main className={styles.outlet}>
                    <Outlet />
                </main>
            </div>

            <ModalYesOrNo 
                header='Deseja Sair?' 
                question='Ao selecionar em sair, seu sistema será fechado e só retornará quando fazer seu login novamente.' 
                modalOpen={modal}
                isClose={handleModalClose} 
            />
        </>
    )
}