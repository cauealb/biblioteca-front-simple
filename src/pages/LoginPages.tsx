import styles from './style.module.css'

export default function LoginPages() {
    return (
        <>
            <div className={styles.card}>
                <h1 className="head">Logo</h1>
                <h1 className="head">Libary Fast</h1>
                <div className={styles.inputs}>
                    <label>
                        Usuário:
                        <input type="text" placeholder='teste@gmail.com' name="user" />
                    </label>
                    <label>
                        Senha:
                        <input type="password" name="user" />
                    </label>
                    <p>Esqueci minha senha</p>
                </div>
                <button className={styles.btn}>Entrar</button>
                <p className={styles.forgotPassword}>Ainda não tenho uma conta</p>
            </div>

            <p className={styles.byMe}>2026 | Desenvolvido por <a target='_blank' href='https://github.com/cauealb'>Cauê Alves</a></p>
        </>
    )
}