import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as ProfilePicture } from './profile.svg'
import { ReactComponent as HomeIcon } from './home.svg'
import { ReactComponent as ClassIcon } from './class.svg'
import { ReactComponent as CommunityIcon } from './community.svg'
import { ReactComponent as SupportIcon } from './support.svg'
import './index.css'

function MenuItem({ icon, name }) {
    return (
        <div className='menu-item'>
            {icon}
            <span>{name}</span>
        </div>
    )
}

export function Menu() {
    return (
        <div className='menu'>
            <div className='logo'>
                <Logo />
            </div>
            <div className='profile'>
                <ProfilePicture />
                <div className='profile-text'>
                    <span className='profile-text-name'>Kayke Galdiano</span>
                    <span className='profile-text-description'>Input: Do zero ao mercado</span>
                </div>
            </div>
            <div className='menu-list'>
                <MenuItem icon={<HomeIcon />} name='Início' />
                <MenuItem icon={<ClassIcon />} name='Aulas' />
                <MenuItem icon={<CommunityIcon />} name='Comunidade' />
                <MenuItem icon={<SupportIcon />} name='Suporte' />
            </div>
        </div>
    )
}