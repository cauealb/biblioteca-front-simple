import styles from "./style.module.css";
import logo from '../../assets/logo.png'
import ButtonJoin from "../../components/ButtonJoin";

export default function LoginPages() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
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

        <p className={styles.byMe}>
            2026 | Desenvolvido por{" "}
            <a target="_blank" href="https://github.com/cauealb">
            Cauê Alves
            </a>
        </p>
      </div>
    </>
  );
}
