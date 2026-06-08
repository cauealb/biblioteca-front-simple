import styles from './style.module.css'

export default function LoginPages() {
    return (
        <>
            <div className={styles.card}>
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
                </div>
                <button className={styles.btn}>Entrar</button>
            </div>
        </>
    )
}