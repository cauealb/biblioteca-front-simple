import { IoPlayCircle } from 'react-icons/io5'
import logo from '../../../assets/logo.png'
import { ButtonCta } from '../components/ButtonCta/ButtonCta'
import style from './style.module.css'

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

                <div>
                    <ButtonCta title='Get Started' />
                </div>
            </header>
            <div className={style.divMain}>
                <h1 className={style.main}>Enhance your book organization with SaaS models.</h1>
                <div>
                    <p className={style.mainDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui hic, cum consequuntur ratione nesciunt!</p>
                    <div className={style.btn}>
                        <button>Get Started</button>
                        <div>
                            <IoPlayCircle color='white' />
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}