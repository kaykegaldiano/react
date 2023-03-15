import imgProfile from './img-profile.png'
import imgProfile2 from './img-profile2.png'
import imgProfile3 from './img-profile3.png'
import { ReactComponent as HeartsIcons } from './hearts.svg'
import './index.css'

function Card({ profilePic, name = '', description = '', time = 2, footer = false }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={profilePic} alt="Profile Picture" />
                <div className='card-body-content'>
                    <span className='card-body-content-name'>{name}&nbsp;<span id='time'>&bull; {time}h atrás</span></span>
                    <span className='card-body-content-description'>{description}</span>
                </div>
            </div>
            {footer &&
                <div className='card-footer'>
                    <HeartsIcons />
                    <p><strong>Você e outras 40 pessoas</strong> curtiram esse comentário</p>
                </div>
            }
        </div>
    )
}

export function Comments() {
    return (
        <div className='comments'>
            <Card profilePic={imgProfile} name='Marcelo Melo' description='Quem fez o desafio, compartilha aqui!' time={3} />
            <Card profilePic={imgProfile2} name='Sérgio Campos' description='Tô finalizando o CSS!' />
            <Card profilePic={imgProfile3} name='Aline Cardoso' description='Já consegui terminar meu primeiro desafio! Deu trabalho mas estou feliz que consegui!' footer={true} />
        </div>
    )
}