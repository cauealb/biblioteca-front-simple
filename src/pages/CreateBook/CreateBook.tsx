import { useState } from 'react'
import PrimaryAction from '../../components/PrimaryAction'
import StatusBook from '../../components/StatusBook'
import style from './style.module.css'

interface FormBook {
    nameBook: string
    authorBook: string
    publishedDate: Date
    status: string
    category: string
}

const form: FormBook = {
    nameBook: '',
    authorBook: '',
    publishedDate: new Date(),
    status: '',
    category: ''
}

export default function CreateBook() {
    const [disableForm, setDisableForm] = useState<boolean>(true);
    const [disableCreateBook, setDisableCreateBook] = useState<boolean>(false)

    const [nameBook, setNameBook] = useState<string>('')
    const [authorBook, setAuthorBook] = useState<string>('')
    const [publishedDate, setPublishedDate] = useState<Date>(new Date())
    const [status, setStatus] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    
    const [formBook, setFormBook] = useState<FormBook>(form)

    function handleInitCreationBook() {
        setDisableCreateBook(true)
        setDisableForm(false)
    }

    function resetFormBook() {
        setFormBook(form)
    }

    function createBook(e: React.FormEvent) {
        e.preventDefault()
        const book: FormBook = {
            nameBook: nameBook, 
            authorBook: authorBook, 
            publishedDate: publishedDate, 
            status: status, 
            category: category 
        }

        setFormBook(book)

        resetFormBook()
    }

    function validationForm() {
        return !disableForm && (nameBook === '' || authorBook === '' || publishedDate > new Date() || status === '' || category === '')
    }

    return (
        <>
            <div className={style.container}>
                <header className={style.hero}>
                    <div>
                        <h1>Create your book</h1>
                        <p>Simple and eazy create your book :)</p>
                    </div>

                    <div onClick={handleInitCreationBook}>
                        <PrimaryAction title='Adicionar livro' disable={disableCreateBook} />
                    </div>
                </header>

                <div className={style.containerInputs}>
                    <form className={`${style.inputs} ${style.panel}`} onSubmit={createBook}>
                        <label>
                            Book name:
                            <input 
                                type="text" 
                                name='bookName' 
                                placeholder='Harry Potter' 
                                disabled={disableForm}
                                value={nameBook}
                                autoComplete='off'
                                onChange={e => setNameBook(e.target.value)} 
                            />
                        </label>

                        <label>
                            Author name:
                            <input 
                                type="text" 
                                name='authorName' 
                                placeholder='J. K. Rowling' 
                                disabled={disableForm} 
                                value={authorBook} 
                                autoComplete='off'
                                onChange={e => setAuthorBook(e.target.value)}
                            />
                        </label>

                        <label>
                            Published:
                            <input 
                                type="date" 
                                name='publishDate' 
                                disabled={disableForm} 
                                value={publishedDate.toString()}
                                autoComplete='off'
                                onChange={e => setPublishedDate(new Date(e.target.value))}
                            />
                        </label>
                        
                        <label>
                            Status
                            <select 
                                name='status' 
                                disabled={disableForm}
                                autoComplete='off'
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                            >
                                <option>Lendo</option>
                                <option>Lido</option>
                                <option>Pendente</option>
                            </select>
                        </label>

                        <label>
                            Category:
                            <select 
                                name='category' 
                                disabled={disableForm}
                                autoComplete='off'
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option>Programação</option>
                                <option>Auto ajuda</option>
                                <option>Romance</option>
                                <option>Ficção Científica</option>
                                <option>Terror</option>
                                <option>Estudo</option>
                            </select>
                        </label>
                        {validationForm() ? <p className={style.formError}>Erro nos inputs do formulário.</p> : ''}
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