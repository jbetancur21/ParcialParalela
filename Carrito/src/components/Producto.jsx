import styles from './ListaProductos.module.css';
import ImagenProducto from "./ImagenProducto";
import BotonAnadir from "./BotonAnadir";

const Producto =({arrayProductos,arrayShoppingCart,setProducto,setShoppingCart})=>{
	
	const añadirCarrito = array => {
		const bandera = arrayShoppingCart.filter(
			existe => existe.id === array.id
		).length;

		if (bandera > 0) {
			/* setShoppingCart({...arrayShoppingCart,cantDisponible:2}); */
		} else {
			const newProductCart = {
				id: array.id,
				Nombre: array.Nombre,
				Precio: array.Precio,
				cantDisponible: 1,
				Descripcion: array.Descripcion,
				url: array.url,
			};
			setShoppingCart([...arrayShoppingCart, newProductCart]);

			const quitarPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id?{...item,cantDisponible:item.cantDisponible-1}:item
			);
			setProducto(quitarPiezaListaProductos);

		}
	};
	
	return (
			<div className={styles.Productos}>
				{arrayProductos.map(item => {
					return (
						<div key={item.id}>
							<ImagenProducto url={item.url} />
							<h2>{item.Nombre}</h2>
							<p>{item.Descripcion}</p>
							<p>{item.cantDisponible} Unidades disponibles</p>
							<p className={styles.Precio}>{item.Precio}$</p>
							<BotonAnadir
								key={item.id}
								array={item}
								añadirCarrito = {añadirCarrito}
							/>
						</div>
					);
				})}
			</div>
	);
}

export default Producto;