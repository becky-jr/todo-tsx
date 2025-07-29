import { useState, useEffect } from "react";

import "./App.css";
import InputField from "./components/InputField/InputField";
import TaskField from "./components/TaskField/TaskField";


const App = () => {

	type Task = {
		id: string;
		taskName: string;
	}





	let [tasks, setTasks] = useState<Task[]>([])

	console.log(tasks);


	// type adding = () => void;

	// const addTask = (newTask: string) => {

	// 	setTasks([...tasks, {taskName: newTask}])

	// }

	useEffect(() => {
		const fetchTasks = async () => {
			const res = await fetch('https://68807747f1dcae717b6216f1.mockapi.io/tasks');
			const data = await res.json();
			setTasks(data);
		};

		fetchTasks();
	}, []);



	const addTask = async (newTask: string) => {
		if (newTask.trim() === '') return;

		const res = await fetch('https://68807747f1dcae717b6216f1.mockapi.io/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ taskName: newTask }),
		});

		const data = await res.json();
		setTasks((prev) => [...prev, data]); // update state with newly created task
	};






	const deleteTask = async (id: string) => {
		await fetch(`https://68807747f1dcae717b6216f1.mockapi.io/tasks/${id}`, {
			method: 'DELETE',
		});

		setTasks((prev) => prev.filter((task) => task.id !== id));
	};




	const updateTask = async (id: string, updatedName: string) => {
		await fetch(`https://68807747f1dcae717b6216f1.mockapi.io/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ taskName: updatedName }),
		});

		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, taskName: updatedName } : task
			)
		);
	};



	return (

		<div className="container mx-auto">

			<div className="App">

				<div className="text-center text-[50px]">
					Taskify
				</div>

				<InputField addTask={addTask} />

				{/* <TaskField taskName={todo} /> */}

				{/* {tasks.map((task) => (
					<TaskField key={task.id} task={task} deleteTask={deleteTask} />
				))} */}

				{tasks.map((task) => (
					<TaskField key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
				))}

			</div>

		</div>

	)

}


export default App;
