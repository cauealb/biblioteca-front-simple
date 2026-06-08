import style from './style.module.css'
import { GoArrowRight } from 'react-icons/go'

interface GetStartedProps {
    title: string
}

export function ButtonCta({title}: GetStartedProps) {
    return (
        <button className={style.style}>
            {title}
            <span><GoArrowRight /></span>
        </button>
    )
}