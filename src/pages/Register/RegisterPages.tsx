import ButtonJoin from "../../components/ButtonJoin";
import logo from '../../assets/logo.png'
import styles from './style.module.css'

export default function RegisterPages() {
    return (
        <>
            <div>
                <div>
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
                        <p className={styles.forgotPassword}>Esqueci minha senha</p>
                    </div>
                    <ButtonJoin title="Entrar" />
                    <p className={styles.noAccont}>Ainda não tenho uma conta</p>
                </div>
            </div>
        </>
    )
}