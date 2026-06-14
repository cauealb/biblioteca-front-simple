import { FaCircle } from 'react-icons/fa'
import CardBook, { type CardBookProps } from '../../components/CardBook'
import style from './style.module.css'
import { useState } from 'react'
import ModalOK from '../../components/ModalOK'


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
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    function handleModalOpen() {
        setModalOpen(true)
    }

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
                            modalOpen={handleModalOpen}
                        />
                    ))}
                </div>

                <footer className={style.ftDescription}>
                    <div>
                        <FaCircle color='orange' />
                        <p>Lendo</p>
                    </div>

                    <div>
                        <FaCircle color='green' />
                        <p>Já lido</p>
                    </div>

                    <div>
                        <FaCircle color='red' />
                        <p>Pendente para ler</p>
                    </div>
                </footer>
            </div>

            {/* <ModalOK 
                title={}
            /> */}
        </>
    )
}