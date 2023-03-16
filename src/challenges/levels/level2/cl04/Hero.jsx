import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as User } from './User.svg'
import { ReactComponent as Lightning } from './lightning.svg'
import imgBruno from './img-bruno.png'
import './index.css'

function Header() {
    return (
        <header className='header'>
            <Logo />
            <div className='header-menu'>
                <div className='header-menu-aluno'>
                    <User />
                    <span>Já sou aluno</span>
                </div>
                <button className='btnInscricao'>Faça sua inscrição</button>
            </div>
        </header>
    )
}

function Main() {
    return (
        <main className='main'>
            <section className='section-text'>
                <div className='chamada'>
                    <Lightning />
                    <span>Faça parte da turma 1</span>
                </div>
                <div className='text'>
                    <h1>Saia do zero e comece sua carreira como dev Full Stack</h1>
                    <p>Aprenda as habilidades necessárias para sair do completo zero e conquistar sua primeira vaga no mercado da programação já nos próximos meses.</p>
                </div>
                <button className='btnCompra'>Garantir minha vaga</button>
            </section>
            <section className='section-image'>
                <img src={imgBruno} />
            </section>
        </main>
    )
}

export function Hero() {
    return (
        <>
            <div className='blur'></div>
            <Header />
            <Main />
        </>
    )
}