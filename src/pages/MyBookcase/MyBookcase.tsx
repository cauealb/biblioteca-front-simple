import CardBook from '../../components/CardBook'
import style from './style.module.css'

export default function MyBookcase() {
    return (
        <>
            <div className={style.container}>
                <h1>Minha lista</h1>

                <CardBook idBook={1} title={"Harry Potter"} read={false} />
            </div>
        </>
    )
}