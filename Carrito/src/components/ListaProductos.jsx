import styles from './ListaProductos.module.css';
const ListaProductos = ({
	arrayProductos,
	arrayShoppingCart,
	setProducto,
	setShoppingCart,
}) => {
	
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

	const añadirPiezas = array =>{

		//array es el arreglo de los productos del carrito y existe es el de todo el listado de productos

		const bandera = arrayProductos.filter(
			existe => existe.id === array.id
		)//Este es un filtro del arreglo de los Productos
		

		if(bandera[0].cantDisponible>0){

			const añadirPiezaCarrito = arrayShoppingCart.map(item =>
				item.id === array.id?{...array,cantDisponible:array.cantDisponible+1}:item
			);
			setShoppingCart(añadirPiezaCarrito);

			const quitarPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id?{...item,cantDisponible:item.cantDisponible-1}:item
			);
			setProducto(quitarPiezaListaProductos);
			
			
		}else(
			alert("Ya no hay unidades Disponibles de este producto")
		)
	}

	const quitarPiezas = array =>{

		//array es el arreglo de los productos del carrito y existe es el de todo el listado de productos

		const bandera = arrayShoppingCart.filter(
			existe => existe.id === array.id
		)//Este es un filtro del arreglo de los Productos

		if(bandera[0].cantDisponible>1){

			const quitarPiezaCarrito = arrayShoppingCart.map(item =>
				item.id === array.id?{...array,cantDisponible:array.cantDisponible-1}:item
			);
			setShoppingCart(quitarPiezaCarrito);

			const añadirPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id?{...item,cantDisponible:item.cantDisponible+1}:item
			);
			setProducto(añadirPiezaListaProductos);
		}else{
			setShoppingCart(arrayShoppingCart.filter(elemento=> elemento.id !== array.id))
			const añadirPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id?{...item,cantDisponible:item.cantDisponible+1}:item
			);
			setProducto(añadirPiezaListaProductos);
		}
	}

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
						<div key={elemento.id} className={styles.productosCarrito}>
							<div className={styles.imagen}>
								<img src={elemento.url} width='40%' />
							</div>
							<div className={styles.texto} key={elemento.id}>
								<h3>{elemento.Nombre}</h3>
								<p>{elemento.Descripcion}</p>
								<p className={styles.Precio}>{elemento.Precio}$</p>
								<div className={styles.añadir}>
									<button onClick={()=>quitarPiezas(elemento)}>-</button>
									<p>{elemento.cantDisponible} Pieza(s)</p>
									<button onClick={()=>añadirPiezas(elemento)}>+</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListaProductos;
