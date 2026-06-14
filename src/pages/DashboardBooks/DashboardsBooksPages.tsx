import { useEffect, useState } from 'react'
import style from './style.module.css'

interface APIProps {
    top: number,
    name: string,
    qtd: number
}

let arr: APIProps[] = [
    {top: 1, name: "A Cabeça do Santo", qtd: 18},
    {top: 2, name: "É Assim que Acaba", qtd: 18},
    {top: 3, name: "O Lado Feio do Amor", qtd: 18},
    {top: 4, name: "A Metamorfose", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
    {top: 5, name: "Verity", qtd: 18},
]

export default function DashboardsBooksPages() {
    const [textBook, setTextBook] = useState<string>('');
    const [listBookSearch, setListBookSearch] = useState<APIProps[]>([])

    useEffect(() => {
        setListBookSearch(arr)
    }, [])

    function handleTextChangedSearchBook(value: string) {
        setTextBook(value)
        
        if(value === '') {
            setListBookSearch(arr)
        } else {
            let filterArr = arr.filter(book => book.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            setListBookSearch(filterArr)
        }
        console.log(value)
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.input}>
                    <h3>Pesquisar livro</h3>
                    <input type="text" onChange={(e) => handleTextChangedSearchBook(e.target.value)} />
                </div>

                <div className={style.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>TOP</th>
                                <th>Livro</th>
                                <th>Quantidades</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listBookSearch.map(book => (
                                <tr key={book.top}>
                                    <td>{book.top}</td>
                                    <td>{book.name}</td>
                                    <td>{book.qtd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}