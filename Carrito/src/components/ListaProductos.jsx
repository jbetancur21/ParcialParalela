import styles from './ListaProductos.module.css';
const ListaProductos = ({
	arrayProductos,
	arrayShoppingCart,
	setProducto,
	setShoppingCart,
}) => {


	const añadirCarrito = array => {

		
		const newProductCart = {
			id: array.id,
			Nombre: array.Nombre,
			Precio: array.Precio,
			cantDisponible: 1,
			Descripcion: array.Descripcion,
			url: array.url,
		};
		setShoppingCart([...arrayShoppingCart, newProductCart]);
	};

	return (
		<div>
			<div className={styles.Productos}>
				{arrayProductos.map(item => {
					return (
						<div key={item.id}>
							<img src={item.url} width='100%' />
							<h2>{item.Nombre}</h2>
							<p>{item.Descripcion}</p>
							<p>{item.cantDisponible} Unidades disponibles</p>
							<p className={styles.Precio}>{item.Precio}$</p>
							<button onClick={() => añadirCarrito(item)}>
								Añadir al carrito
							</button>
						</div>
					);
				})}
			</div>

			<div className={styles.Carrito}>
				<h2>Carrito de Compras ({arrayShoppingCart.length})</h2>
				{arrayShoppingCart.map(elemento => {
					return (
						<div className={styles.productosCarrito}>
							<div className={styles.imagen}>
								<img src={elemento.url} width='40%' />
							</div>
							<div className={styles.texto} key={elemento.id}>
								<h3>{elemento.Nombre}</h3>
								<p>{elemento.Descripcion}</p>
								<p>{elemento.cantDisponible} Pieza(s)</p>
								<p className={styles.Precio}>{elemento.Precio}$</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListaProductos;
