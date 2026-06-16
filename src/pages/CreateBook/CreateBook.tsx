import { useEffect, useState } from 'react'
import PrimaryAction from '../../components/PrimaryAction'
import StatusBook from '../../components/StatusBook'
import style from './style.module.css'

export default function CreateBook() {
    const [disableForm, setDisableForm] = useState<boolean>(true);

    return (
        <>
            <div className={style.container}>
                <header>
                    <h1>Create your book</h1>
                    <p>Simple and eazy create your book :)</p>
                </header>

                <div className={style.containerInputs}>
                    <form className={`${style.inputs} ${style.panel}`}>
                        <label>
                            Book name:
                            <input type="text" placeholder='Harry Potter' disabled={disableForm} />
                        </label>

                        <label>
                            Author name:
                            <input type="text" placeholder='J. K. Rowling' disabled={disableForm}  />
                        </label>

                        <label>
                            Published:
                            <input type="date" disabled={disableForm} />
                        </label>
                        
                        <label>
                            Status
                            <select disabled={disableForm}>
                                <option>Lendo</option>
                                <option>Lido</option>
                                <option>Pendente</option>
                            </select>
                        </label>

                        <label>
                            Published:
                            <select disabled={disableForm}>
                                <option>Programação</option>
                                <option>Auto ajuda</option>
                                <option>Romance</option>
                                <option>Ficção Científica</option>
                                <option>Terror</option>
                                <option>Estudo</option>
                            </select>
                        </label>
                        <footer className={style.footerBtn}>
                            <button disabled={disableForm} className={style.clear}>
                                Limpar
                            </button>
                            <PrimaryAction title='Salvar livro' disable={disableForm}/>
                        </footer>
                    </form>

                    <div className={`${style.listBooks} ${style.panel}`}>
                        <h4>Livros criados</h4>

                        <div className={style.list}>
                            <div className={style.bookCreated}>
                                <div className={style.logoBook}></div>
                                <div>
                                    <h3>Clean Code</h3>
                                    <p>Robert C. Martin</p>
                                    <StatusBook status='Lendo' />
                                </div>
                            </div>

                            <div className={style.bookCreated}>
                                <div className={style.logoBook}></div>
                                <div>
                                    <h3>Clean Code</h3>
                                    <p>Robert C. Martin</p>
                                    <StatusBook status='Lendo' />
                                </div>
                            </div>
                            
                        </div>

                        <div className={style.statusCreate}>
                            <p>Livro adicionado com sucesso</p>
                            <p>Ok</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}