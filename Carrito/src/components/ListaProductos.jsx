import styles from './ListaProductos.module.css';
import { useState } from 'react';

const ListaProductos = () => {
	const products = [
		{
			id: '1u',
			Nombre: 'Nike Dunk High Retro',
			Precio: 120,
			cantDisponible: 5,
			Descripcion: 'Really good Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ec602aa2-b8e6-4a6e-97fe-9ed8e7febb87/dunk-high-zapatillas-lC4X8h.png',
		},
		{
			id: '2u',
			Nombre: 'Nike Zoom Fly 5',
			Precio: 150,
			cantDisponible: 3,
			Descripcion: 'Good Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png',
		},
		{
			id: '3u',
			Nombre: 'Nike Streetgato',
			Precio: 180,
			cantDisponible: 2,
			Descripcion: 'Really Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhwVgz.png',
		},
		{
			id: '4u',
			Nombre: 'Zoom Freak 4',
			Precio: 150,
			cantDisponible: 3,
			Descripcion: 'Really Nike good Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png',
		},
	];
	const [arrayProductos, setProducto] = useState(products);

	return (
		<div>
			<div className={styles.Cuadricula}>
				{arrayProductos.map(item => {
					return (
						<div>
							<img src={item.url} width='100%' />
							<h2>{item.Nombre}</h2>
							<p>{item.Descripcion}</p>
							<p>{item.cantDisponible} Unidades disponibles</p>
							<p className={styles.Precio}>{item.Precio}$</p>
							<button>Añadir al carrito</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListaProductos;
