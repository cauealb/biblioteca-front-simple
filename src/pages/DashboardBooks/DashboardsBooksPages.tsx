import style from './style.module.css'

let arr = [
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
    return (
        <>
            <div className={style.container}>
                <div className={style.input}>
                    <h3>Pesquisar livro</h3>
                    <input type="text" />
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
                            {arr.map(book => (
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