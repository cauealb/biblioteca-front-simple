import { IoPlayCircle } from 'react-icons/io5'
import logo from '../../../assets/logo.png'
import { ButtonCta } from '../components/ButtonCta/ButtonCta'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import stacks from '../../../assets/stacks.png' 

export default function LadingPage() {
    return (
        <>
            <header className={style.hero}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                
                <div className={style.opt}>
                    <a href="">About us</a> 
                    <a href="">Pricing</a>
                    <a href="">Solutions</a>
                    <a href="">Features</a>
                    <a href="">Company</a>
                </div>

                <Link to="/login">
                    <ButtonCta title="Get Started" />
                </Link>
            </header>
            <article className={style.divMain}>
                <h1 className={style.main}>Enhance your book organization with SaaS models</h1>
                <div>
                    <p className={style.mainDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui hic, cum consequuntur ratione nesciunt!</p>
                    <div className={style.btn}>
                        <Link to="/login">
                            <button>Get Started</button>
                        </Link>
                        <div>
                            <IoPlayCircle color='white' />
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className={style.solutions}>
                <div>
                    <h2 className={style.main}>The Fastest way to manage your libary</h2>
                    <p className={style.mainDescription}>Control books, loans, and users in a single, simple, and intuitive system.</p>
                </div>
                <div>
                    <img src={stacks} alt="stacks picture" />
                </div>
            </article>
            {/* TODO: Finalizar Landing Page */}
        </>
    )
}