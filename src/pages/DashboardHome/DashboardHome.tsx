import style from './style.module.css'

export default function DashboardHome() {
    return (
        <>
            <div className={style.container}>
                <header>
                    <h1>Dashboard</h1>
                    <p>Visao geral dos seus livros</p>
                </header>

                <div className={style.metrics}>
                    <article>
                        <h2>128</h2>
                        <p>Total</p>
                    </article>

                    <article>
                        <h2>74</h2>
                        <p>Lidos</p>
                    </article>

                    <article>
                        <h2>12</h2>
                        <p>Lendo</p>
                    </article>
                </div>

                <div>
                    <header>
                        <p>#</p>
                        <p>Livro</p>
                        <p>Status</p>
                    </header>

                    <div>
                        <div>
                            <p>01</p>
                            <p>Domain-Driven Design</p>
                            <p>Lendo</p>
                        </div>

                        <div>
                            <p>02</p>
                            <p>A Metamorfose</p>
                            <p>Lido</p>
                        </div>

                        <div>
                            <p>03</p>
                            <p>Verity</p>
                            <p>Pendente</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}