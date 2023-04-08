import { useState } from 'react';

const ListaProductos = () => {
	const products = [
		{
			id: '1u',
			Nombre: 'Nike Dunk High Retro',
			Precio: 120,
			cantDisponible: 5,
			Descripcion: 'Really good Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:b:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hz.png',
		},
		{
			id: '2u',
			Nombre: 'Nike Zoom Fly 5',
			Precio: 150,
			cantDisponible: 3,
			Descripcion: 'good Nike shoes',
			url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png',
		},
	];
	const [arrayProductos, setProducto] = useState(products);

	return (
		<div>
			<h2>Lista</h2>
			<div>
				{arrayProductos.map(item => {
					return(
					<div>
						<img src={item.url} width="15%" />
						<p>{item.Nombre}</p>
						<p>{item.Precio}$</p>
						<p>{item.cantDisponible}</p>
						<p>{item.Descripcion}</p>
						
					</div>
				)})}
			</div>
		</div>
	);
};

export default ListaProductos;
