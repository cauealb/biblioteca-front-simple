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

                <div>
                    <label>
                        Book name:
                        <input type="text" />
                    </label>

                    <label>
                        Author name:
                        <input type="text" />
                    </label>

                    <label>
                        Published:
                        <input type="date" />
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
                </div>

                <PrimaryAction title='Salvar'/>
            </div>
        </>
    )
}