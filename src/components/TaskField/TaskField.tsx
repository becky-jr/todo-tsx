

// interface Task {
//     id: string;
//     taskName: string;

// }

// interface TaskFieldProps {
//     task: Task;
//     deleteTask: (id: string) => void;
// }

// const TaskField = ({ task, deleteTask }: TaskFieldProps) => {
//     return (

//         <>

//             <div className="Task-conten w-[620px] mx-auto my-[20px]">

//                 <div className="Task flex justify-between items-center mb-[10px]">

//                     <div className="task-text" >
//                         {task.taskName}
//                     </div>

//                     <div className="btn w-[100px] h-[40px] bg-[#FE7743] flex justify-center items-center rounded-[5px] cursor-pointer" onClick={() => deleteTask(task.id)}>Delete</div>

//                 </div>

//                 <hr />

//             </div>


//         </>

//     )
// }


// export default TaskField


import { useState } from "react";

interface Task {
	id: string;
	taskName: string;
}

interface TaskFieldProps {
	task: Task;
	deleteTask: (id: string) => void;
	updateTask: (id: string, updatedName: string) => void;
}

const TaskField = ({ task, deleteTask, updateTask }: TaskFieldProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState(task.taskName);

	const handleDoubleClick = () => {
		setIsEditing(true);
	};

	const handleEditSubmit = () => {
		if (editedName.trim() === "") return;
		updateTask(task.id, editedName);
		setIsEditing(false);
	};

	return (
		<div className="Task-conten w-[620px] mx-auto my-[20px] max-[500px]:w-[350px] max-[500px]:max-h-[50px]">
			<div className="Task flex justify-between items-center mb-[10px]">
				{isEditing ? (
					<input
						className="border p-2 w-full mr-4 text-[black]"
						value={editedName}
						onChange={(e) => setEditedName(e.target.value)}
						onBlur={handleEditSubmit}
						onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
						autoFocus
					/>
				) : (
					<div className="task-text w-full max-[500px]:w-[350px]" onDoubleClick={handleDoubleClick}>
						{task.taskName}
					</div>
				)}

				<div
					className="btn w-[100px] h-[40px] bg-[#FE7743] flex justify-center items-center rounded-[5px] cursor-pointer ml-4"
					onClick={() => deleteTask(task.id)}
				>
					Delete
				</div>
			</div>
			<hr />
		</div>
	);
};

export default TaskField;