import { ReactComponent as Pix } from './Union.svg'
import './index.css'

export function CardPix() {
    return (
        <div className='card'>
            <Pix />
            <span id='spanTransferencias'>Transferências via Pix</span>
            <span id='spanValor'>R$ 150,00</span>
        </div>
    )
}