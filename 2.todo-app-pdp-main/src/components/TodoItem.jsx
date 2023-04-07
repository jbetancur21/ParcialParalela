import styles from './TodoItem.module.css';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, completedTodo }) => {
	return (
		<li className={styles.list}>
			<div className={styles.listItem}>{todo.title}</div>
			<div>
				<button onClick={() => completedTodo(todo)}>
					<FaCheck />
				</button>
				<button>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
