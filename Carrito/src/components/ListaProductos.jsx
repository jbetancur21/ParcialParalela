import { useEffect } from 'react';
import styles from './ListaProductos.module.css';
import { useState } from 'react';
import Producto from "./Producto"
const ListaProductos = ({arrayProductos,arrayShoppingCart,setProducto,setShoppingCart}) => {

const [cont, setCont] = useState(0);	
const [descuento, setDescuento] = useState(0);	
const [totalPagar, settotalPagar] = useState(0);	

	useEffect(
		() => {
			let total = 0;
			let contador = 0;
			if (arrayShoppingCart.length === 0) {
				settotalPagar(0);
				setDescuento(0);
				setCont(0);
			} else {
				for (var i = 0; i < arrayShoppingCart.length; i++) {
					total =
						total +
						arrayShoppingCart[i].Precio * arrayShoppingCart[i].cantDisponible;
					contador = contador + arrayShoppingCart[i].cantDisponible;
				}
				settotalPagar(total);
				setDescuento(0);
				setCont(contador);
			}
			
		},
		[arrayShoppingCart]
	);


	const añadirPiezas = array => {
		//array es el arreglo de los productos del carrito y existe es el de todo el listado de productos

		const bandera = arrayProductos.filter(existe => existe.id === array.id); //Este es un filtro del arreglo de los Productos

		if (bandera[0].cantDisponible > 0) {
			const añadirPiezaCarrito = arrayShoppingCart.map(item =>
				item.id === array.id
					? { ...array, cantDisponible: array.cantDisponible + 1 }
					: item
			);
			setShoppingCart(añadirPiezaCarrito);

			const quitarPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id
					? { ...item, cantDisponible: item.cantDisponible - 1 }
					: item
			);
			setProducto(quitarPiezaListaProductos);
		} else alert('Ya no hay unidades Disponibles de este producto');
	};

	const asignarDescuento = ({target})=>{
		if(target.value<101){
			setDescuento(target.value)
		}else{
			alert("El descuento no puede ser mayor a 100$")
		}
	}

	const crearDescuento = ()=>{
		settotalPagar(totalPagar-descuento)
	}

	const quitarPiezas = array => {
		//array es el arreglo de los productos del carrito y existe es el de todo el listado de productos

		const bandera = arrayShoppingCart.filter(existe => existe.id === array.id); //Este es un filtro del arreglo de los Productos

		if (bandera[0].cantDisponible > 1) {
			const quitarPiezaCarrito = arrayShoppingCart.map(item =>
				item.id === array.id
					? { ...array, cantDisponible: array.cantDisponible - 1 }
					: item
			);
			setShoppingCart(quitarPiezaCarrito);

			const añadirPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id
					? { ...item, cantDisponible: item.cantDisponible + 1 }
					: item
			);
			setProducto(añadirPiezaListaProductos);
		} else {
			setShoppingCart(
				arrayShoppingCart.filter(elemento => elemento.id !== array.id)
			);
			const añadirPiezaListaProductos = arrayProductos.map(item =>
				item.id === array.id
					? { ...item, cantDisponible: item.cantDisponible + 1 }
					: item
			);
			setProducto(añadirPiezaListaProductos);
		}
	};

	return (
		<div>
			<Producto
				arrayShoppingCart={arrayShoppingCart}
				setShoppingCart={setShoppingCart}
				arrayProductos={arrayProductos}
				setProducto={setProducto}
			/>

			<div className={styles.SecCarrito}>
				<div className={styles.Carrito}>
					<h2>Carrito de Compras ({cont})</h2>
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
										<button onClick={() => quitarPiezas(elemento)}>-</button>
										<p>{elemento.cantDisponible} Pieza(s)</p>
										<button onClick={() => añadirPiezas(elemento)}>+</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className={styles.Summary}>
					<h2>Total a Pagar: {totalPagar}$</h2>
					<input type="number" placeholder="Valor Descuento" value={descuento} onChange={asignarDescuento}/>
					<button onClick={crearDescuento}>Aplicar</button>
					<hr />
					<h3>Subtotal: </h3><p>{totalPagar}$</p>
					<h3>Envío: </h3><p>GRATIS</p>
					<h3>Cupón: </h3><p>{descuento}$</p>

				</div>

			</div>
		</div>
	);
};

export default ListaProductos;
