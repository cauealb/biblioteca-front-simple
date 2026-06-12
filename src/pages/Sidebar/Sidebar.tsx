import { useState } from 'react'
import styles from './style.module.css'
import { MdMenu } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { IoIosExit } from 'react-icons/io'
import ModalYesOrNo from '../../components/ModalYesOrNo'
import Navbar from '../Navbar/Navbar'

export default function Sidebar() {
    const [modal, setModal] = useState<boolean>(false)
    const [expandMenu, setExpandMenu] = useState<boolean>(true)

    function handleModalOpen() {
        setModal(true)
    }

    function handleModalClose() {
        setModal(false)
    }


    function handleClickMenu() {
        setExpandMenu(prev => prev ? false : true)
    }

    return (
        <>
            <div className={styles.container}>
                <aside className={`${styles.sidebar} ${expandMenu ? styles.sidebarCollapsed : ''}`}>
                    <div className={styles.navSidebar}>
                        <div className={styles.menu}>
                            <MdMenu onClick={handleClickMenu} size={30} />
                        </div>
                        <div className={styles.contentuser}>
                            <FaUser />
                            <h2>Olá, Cauê</h2>
                        </div>

                        <Navbar expandMenu={expandMenu} />

                    </div>
                    
                    <div onClick={handleModalOpen} className={styles.exit}>
                        <IoIosExit size={28} />
                        <h3>Sair</h3>
                    </div>
                </aside>
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