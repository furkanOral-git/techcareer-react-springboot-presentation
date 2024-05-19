import { motion } from "framer-motion";
import { TodoItemElement, TodoItemProp } from "./todoItemElement";
import { useEffect, useRef, useState } from "react";
import TodoApiService from "../api/TodoApiService";
import { CreateTodoItemForm, UpdateTodoItemForm } from "../api/Form";
import "../assets/list.css";

export interface TodoListProp {

    id: number;
    title: string;
    aggregate: TodoItemProp[];
    animate: string

}

export const TodoListElement: React.FC<TodoListProp> = (props) => {
    
    const [items,setItems] = useState([]);


    const handleSave = () => {
        console.log(props.aggregate);
        props.aggregate.forEach(async (item) => {

            const form = new UpdateTodoItemForm(item.id, item.status, item.content);
            await TodoApiService.updateItem(form);


        })
    }
    const handleHit = (e: React.KeyboardEvent<HTMLInputElement>) => {

        // if (e.key == "Enter" && e.currentTarget) {
        //     const form: CreateTodoItemForm = new CreateTodoItemForm(e.currentTarget.value)
        //         TodoApiService.createListItem(props.id)
        //     console.log()
        // }
    }
    return (

        <motion.div variants={{
            hidden: { y: "-100vw", display: "none" },
            visible: { y: "-87vh", display: "block" },
        }} initial="hidden" animate={props.animate} className="todo-container" >
            <div className="todo-container-head">
                <h2>{props.title}</h2>
                <input onKeyDown={(e) => handleHit(e)} type="text" name="create-item" id="create-item" />
                <button onClick={handleSave}>
                    <span className="todo-list-save material-symbols-outlined">
                        save_as
                    </span>
                </button>
            </div>
            <div className="todo-list-items">
                {props.aggregate.map((item, key) => (<TodoItemElement key={key} id={item.id} content={item.content} list_id={item.list_id} status={item.status} />))}
            </div>
        </motion.div>
    )
}