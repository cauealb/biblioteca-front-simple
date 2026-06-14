import StatusBook from '../../components/StatusBook'
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
                    <article className={style.panel}>
                        <h2>128</h2>
                        <p>Total</p>
                    </article>

                    <article className={style.panel}>
                        <h2>74</h2>
                        <p>Lidos</p>
                    </article>

                    <article className={style.panel}>
                        <h2>12</h2>
                        <p>Lendo</p>
                    </article>
                </div>

                <div className={style.panel}>
                    <header className={style.columns}>
                        <p>#</p>
                        <p>Livro</p>
                        <p>Status</p>
                    </header>

                    <div className={style.dataBook}>
                        <div>
                            <p>01</p>
                            <p>Domain-Driven Design</p>
                            <StatusBook status='Lendo' />
                        </div>

                        <div>
                            <p>02</p>
                            <p>Domain-Driven Design</p>
                            <StatusBook status='Lido' />
                        </div>

                        <div>
                            <p>03</p>
                            <p>Verity</p>
                            <StatusBook status='Pendente' />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}