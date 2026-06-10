import ButtonJoin from "../../components/ButtonJoin";
import logo from '../../assets/logo.png'
import styles from './style.module.css'
import { Link } from "react-router-dom";

export default function RegisterPages() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.registerContainer}>
                    <img className={styles.logo} src={logo} alt="Logo Libary Fast" />
                    <h1 className="head">Libary Fast</h1>
                    <div className={styles.inputs}>
                        <label>
                            Usuário:
                            <input type="text" placeholder="cauealb" name="user" />
                        </label>
                        <label>
                            Senha:
                            <input type="password" placeholder="*******" name="user" />
                        </label>
                    </div>
                    <ButtonJoin title="Criar conta" />
                    <Link to="/login">
                        <p className={styles.haveAccont}>Já tenho uma conta cadastrada</p>
                    </Link>
                </div>

                <p className={styles.byMe}>
                    2026 | Desenvolvido por{" "}
                    <a target="_blank" href="https://github.com/cauealb">
                    Cauê Alves
                    </a>
                </p>
            </div>
        </>
    )
}