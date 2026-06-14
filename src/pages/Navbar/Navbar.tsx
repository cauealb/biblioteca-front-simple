import { Link } from "react-router-dom";
import styles from './style.module.css'
import { FaBook, FaHome, FaSwatchbook } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

interface NavbarProps {
    expandMenu: boolean
}

export default function Navbar({ expandMenu }: NavbarProps) {
    return (
        <>
            <nav className={`${styles.options} ${expandMenu ? styles.navbarCollapsed : ''}`}>
                <Link to="/dashboard">
                    <div>
                        <FaHome />
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/dashboard/best-books">
                    <div>
                        <FaBook  />
                        <p>Book</p>
                    </div>
                </Link>
                <Link to="/dashboard/my-bookcase">
                    <div>
                        <FaSwatchbook  />
                        <p>My Books</p>
                    </div>
                </Link>
                <Link to="/dashboard/config">
                    <div>
                        <IoSettingsSharp  />
                        <p>Settings</p>
                    </div>
                </Link>
            </nav>
        </>
    )
}