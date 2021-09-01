import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer({greeting = "Catálogo de productos"}){

    const onAdd =(count) =>{
        alert(`Agregaste ${count} producto(s) a tu carrito`)
    }

    return(
        <div>
        <h1>{greeting}</h1>
        <ItemList />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;