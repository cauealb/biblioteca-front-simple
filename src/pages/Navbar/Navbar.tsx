import { Link } from "react-router-dom";
import { FaBook, FaHome } from "react-icons/fa";
import { IoChevronDown, IoSettingsSharp } from "react-icons/io5";
import styles from "./style.module.css";

interface NavbarProps {
    expandMenu: boolean;
}

export default function Navbar({ expandMenu }: NavbarProps) {
    return (
        <>
            <nav className={`${styles.options} ${expandMenu ? styles.navbarCollapsed : ''}`}>
                <Link to="/dashboard" className={styles.navItem}>
                    <div>
                        <FaHome />
                        <p>Home</p>
                    </div>
                </Link>

                <details className={styles.navGroup}>
                    <summary className={styles.navSummary}>
                        <div>
                            <FaBook />
                            <p>Book</p>
                        </div>
                        <IoChevronDown className={styles.chevron} />
                    </summary>

                    <div className={styles.subMenu}>
                        <Link to="/dashboard/my-bookcase">Meus livros</Link>
                        <Link to="/dashboard/create-book">Cadastrar livros</Link>
                        <Link to="/dashboard/best-books">Ranking da semana</Link>
                    </div>
                </details>

                <details className={styles.navGroup}>
                    <summary className={styles.navSummary}>
                        <div>
                            <IoSettingsSharp />
                            <p>Settings</p>
                        </div>
                        <IoChevronDown className={styles.chevron} />
                    </summary>

                    <div className={styles.subMenu}>
                        <Link to="/dashboard/config/my-settings">Minhas configuracoes</Link>
                        <Link to="/dashboard/config/system">Configuracoes do sistema</Link>
                    </div>
                </details>
            </nav>
        </>
    )
}
