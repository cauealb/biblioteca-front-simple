import logo from '../../../assets/logo.png'
import { ButtonCta } from '../components/ButtonCta'
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
            <main>
                <h1>teste</h1>
            </main>
        </>
    )
}