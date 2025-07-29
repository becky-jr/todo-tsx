import React, { useState } from "react"

interface ParentProps {
    // todo: string;
    // setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTask: (task: string) => void;
}


const InputField = ({addTask }: ParentProps) => {


    let [value, setValue] = useState('')


    return (
        <>

            <form action=""
                className="text-center flex gap-[20px] justify-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    addTask(value);
                    setValue('');
                }}>

                <input
                    className="input-box w-[500px] h-[50px] rounded-[5px] px-[5px] text-[black]"
                    type="text"
                    placeholder="Enter a task"
                    value={value}
                    onChange={
                        (e) => {
                            setValue(e.target.value)
                            // console.log(todo);

                        }
                    } />

                <button
                    type="submit"
                    className="input-submit w-[100px] h-[50px] bg-[white] text-[black]">
                    Enter
                </button>

            </form>

        </>
    )
}


export default InputField