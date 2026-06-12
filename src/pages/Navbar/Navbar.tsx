import { Link } from "react-router-dom";
import styles from './style.module.css'
import { FaBook, FaSwatchbook } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

interface NavbarProps {
    expandMenu: boolean
}

export default function Navbar({ expandMenu }: NavbarProps) {
    return (
        <>
            <nav className={`${styles.options} ${expandMenu ? styles.navbarCaollaped : ''}`}>
                <Link to="/dashboard/best-books">
                    <div>
                        <FaBook />
                        <p>Livros</p>
                    </div>
                </Link>
                <Link to="/dashboard/my-bookcase">
                    <div>
                        <FaSwatchbook />
                        <p>Meus livros</p>
                    </div>
                </Link>
                <Link to="/dashboard/config">
                    <div>
                        <IoSettingsSharp />
                        <p>Configurações</p>
                    </div>
                </Link>
            </nav>
        </>
    )
}