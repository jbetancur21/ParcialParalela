
const BotonAnadir = ({array,añadirCarrito}) => {
    return(
	<button onClick={() => añadirCarrito(array)}>Añadir al carrito</button>
    )
}
export default BotonAnadir;