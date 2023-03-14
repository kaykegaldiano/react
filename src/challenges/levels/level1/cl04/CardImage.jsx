import img from './img.png'
import img2 from './Lynsey.png'
import { ReactComponent as Comment } from './comment.svg'
import { ReactComponent as Eye } from './eye.svg'
import './index.css'

export function CardImage({ comments = 72, views = 24}) {
    return (
        <div className='card'>
            <img src={img} />
            <div className='card-body'>
                <h1 className='title'>Escolha do dia - Natureza</h1>
                <div className='profile'>
                    <img src={img2} />
                    <span className='profile-text'>Lynsey Searle&nbsp;<span id='dias'>&bull; 1 dia atrás</span></span>
                </div>
                <div className='footer'>
                    <div className='footer-comments'>
                        <Comment />
                        <span>{comments}</span>
                    </div>
                    <div className='footer-views'>
                        <Eye />
                        <span>{views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}