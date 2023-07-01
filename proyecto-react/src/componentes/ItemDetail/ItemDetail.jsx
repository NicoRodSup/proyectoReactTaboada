import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
    <div className='div-contenedor'>
        <div className='item-detail'>
                <h2 className='nombre-detail'>{nombre}</h2>
                <h3 className='precio-detail'>${precio}</h3>
                <h3 className='id-detail'>{id}</h3>
                <img className='img-detail' src={img} alt={nombre} />
                <ItemCount initial={1} stock={10} onAdd={(contador) => console.log(`cantidad agregada`, contador)} />
        </div>
    </div>
    )
}

export default ItemDetail