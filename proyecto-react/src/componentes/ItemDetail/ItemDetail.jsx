import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='item-detail'>
            <div className='info-item'>
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
                <h3>{id}</h3>
                <img src={img} alt={nombre} />
            </div>
        </div>
    )
}

export default ItemDetail