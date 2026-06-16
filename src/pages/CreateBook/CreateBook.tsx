import PrimaryAction from '../../components/PrimaryAction'
import style from './style.module.css'

export default function CreateBook() {
    return (
        <>
            <div className={style.container}>
                <header>
                    <h1>Create your book</h1>
                    <p>Simple and eazy create your book :)</p>
                </header>

                <div className={style.containerInputs}>
                    <div className={`${style.inputs} ${style.panel}`}>
                        <label>
                            Book name:
                            <input type="text" placeholder='Harry Potter' />
                        </label>

                        <label>
                            Author name:
                            <input type="text" placeholder='J. K. Rowling'  />
                        </label>

                        <label>
                            Published:
                            <input type="date" />
                        </label>
                        
                        <label>
                            Status
                            <select>
                                <option>Lendo</option>
                                <option>Lido</option>
                                <option>Pendente</option>
                            </select>
                        </label>

                        <label>
                            Published:
                            <select>
                                <option>Programação</option>
                                <option>Auto ajuda</option>
                                <option>Romance</option>
                                <option>Ficção Científica</option>
                                <option>Terror</option>
                                <option>Estudo</option>
                            </select>
                        </label>
                        <footer className={style.footerBtn}>
                            <button className={style.clear}>
                                Limpar
                            </button>
                            <PrimaryAction title='Salvar livro'/>
                        </footer>
                    </div>

                    <div className={`${style.listBooks} ${style.panel}`}>
                        <h4>Livros criados</h4>
                    </div>
                </div>
                

            </div>
        </>
    )
}