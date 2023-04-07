import uuid4 from 'uuid4';

const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {
	const handlerInput = ({ target }) => {
		setInputTodo(target.value);
	};
	const handlerSubmit = e => {
		e.preventDefault();
		const newTodo = { id: uuid4(), title: inputTodo, completed: false };
		setTodos([...todos, newTodo]);
		setInputTodo('');
	};
	return (
		<form onSubmit={handlerSubmit}>
			<input
				type='text'
				placeholder='Enter to todo'
				name='task'
				value={inputTodo}
				onChange={handlerInput}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};

export default Form;
