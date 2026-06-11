import styles from './style.module.css'
import { FaUser } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";

export default function DashboardPages() {
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
                    
                    <div className={styles.exit}>
                        <IoIosExit size={28} />
                        <h3>Sair</h3>
                    </div>
                </aside>

                <div className={styles.content}>
                    <h1>Conteúdo</h1>
                </div>
            </div>
        </>
    )
}