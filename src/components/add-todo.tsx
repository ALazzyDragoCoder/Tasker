"use client"

import {FormEvent, useState} from "react";
import {useTodos} from "@/store/todos";


const AddTodo = () => {
    const [todo,setTodo] = useState("")

    const {handleAddTodo} = useTodos();
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write your Task Here" name="" value={todo} onChange={(event) => setTodo(event.target.value)} />
            <button type="submit"> ADD </button>
        </form>
    );
};

export default AddTodo;