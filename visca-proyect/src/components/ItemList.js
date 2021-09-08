import Item from './Item'

function ItemList({product}){
  const ItemList=  product.map((items)=>
    <Item key={items.id} product={items}/>)
    return (
        <div>
            <h1>Catálogo de productos</h1>
            <div>
                {ItemList}
            </div>
        </div>
    )
        

    
}

export default ItemList