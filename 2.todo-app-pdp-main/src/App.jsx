import Header from './components/Header';
import styles from './App.module.css';
import Form from './components/Form';
import { useState } from 'react';
import TodoList from './components/TodoList';
const App = () => {
	const [inputTodo, setInputTodo] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.appwrapper}>
				<div>
					<Header />
				</div>
				<div>
					<Form
						inputTodo={inputTodo}
						setInputTodo={setInputTodo}
						todos={todos}
						setTodos={setTodos}
					/>
				</div>
				<div>
					<TodoList todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	);
};

export default App;
