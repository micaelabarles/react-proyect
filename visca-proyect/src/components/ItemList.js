import Item from './Item'

const ItemList = ({products}) =>{

    return (
        <div>
            <h1>Catálogo de productos</h1>
            <div>{products.map((product)=>{
                return <Item key={product.id} product={product}/>})}
            </div>
        </div>
    )
        

    
}

export default ItemList