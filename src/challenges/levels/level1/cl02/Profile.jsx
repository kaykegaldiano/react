import { ReactComponent as ProfileImage } from './Vector.svg'
import './index.css'

export function Profile({ children }) {
    return (
        <div className='profile'>
            <ProfileImage />
            <div className='content'>
                <h1 id='nome'>{children}</h1>
                <span>Input: Do zero ao mercado</span>
            </div>
        </div>
    )
}