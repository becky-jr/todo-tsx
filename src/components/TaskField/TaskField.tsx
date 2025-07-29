

interface Task {
    id: string;
    taskName: string;

}

interface TaskFieldProps {
    task: Task;
    deleteTask: (id: string) => void;
}

const TaskField = ({ task, deleteTask }: TaskFieldProps) => {
    return (

        <>

            <div className="Task-conten w-[620px] mx-auto my-[20px]">

                <div className="Task flex justify-between items-center mb-[10px]">

                    <div className="task-text">
                        {task.taskName}
                    </div>

                    <div className="btn w-[100px] h-[40px] bg-[#FE7743] flex justify-center items-center rounded-[5px]" onClick={() => deleteTask(task.id)}>Delete</div>

                </div>

<hr />

            </div>


        </>

    )
}


export default TaskField