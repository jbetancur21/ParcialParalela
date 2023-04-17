import styles from './ListaProductos.module.css';

const ImagenProducto = ({url})=>{
	return (
		<div className={styles.Productos}>
			<img src={url} width='100%' />
		</div>
	);
}   

export default ImagenProducto;