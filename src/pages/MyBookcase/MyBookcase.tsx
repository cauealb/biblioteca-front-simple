import CardBook, { type CardBookProps } from '../../components/CardBook'
import style from './style.module.css'


let books:CardBookProps[] = [
    {
        idBook: 1,
        title: "Harry Poter",
        read: true
    },
    {
        idBook: 2,
        title: "As Crônicas de Nârnia",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    },
    {
        idBook: 3,
        title: "Meu nome é Êneias.",
        read: true
    }
]

export default function MyBookcase() {
    return (
        <>
            <div className={style.container}>
                <h1>Minha lista</h1>

                <div className={style.list}>
                    {books.map(book => (
                        <CardBook 
                            key={book.idBook}
                            idBook={book.idBook}
                            title={book.title}
                            read={book.read}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}