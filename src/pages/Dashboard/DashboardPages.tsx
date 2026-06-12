import styles from './style.module.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

export default function DashboardPages() {
    return(
        <>
            <div className={styles.container}>
                <Sidebar />

                <main className={styles.outlet}>
                    <Outlet />
                </main>
            </div>
        </>
    )
}