import { useState } from 'react';
import styles from './style.module.css'
import ModalYesOrNo from '../../components/ModalYesOrNo';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

export default function DashboardPages() {
    const [modal, setModal] = useState<boolean>(false)

    function handleModalClose() {
        setModal(false)
    }

    return(
        <>
            <div className={styles.container}>
                <Sidebar />

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