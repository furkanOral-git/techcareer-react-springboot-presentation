import { motion } from "framer-motion";
import { useRef, useState } from "react";

export interface TodoItemProp {

    id: number;
    content: string;
    list_id: number;
    status: boolean;

}
export const TodoItemElement: React.FC<TodoItemProp> = (props) => {
    
    const [status, setStatus] = useState(props.status);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLHeadingElement>(null);

    

    const handleClick = () => {

        setStatus(!status);
        if (status) {

            const div = containerRef.current
            const content = contentRef.current;
            if (div) {

                div.classList.toggle("todo-item-container-checked")
            }
            if (content) {
                content.classList.toggle("todo-item-content-dashed");
            }


        }
    }

    return (

        <motion.div onClick={handleClick} ref={containerRef} className="todo-item-container" >
            <label htmlFor=""></label>
            {props.status == true ? (<span className="check-icon material-symbols-outlined">
                check_circle
            </span>) : (<span className="check-icon material-symbols-outlined">
                radio_button_unchecked
            </span>)}
            <h4 ref={contentRef} className="todo-item-content">{props.content}</h4>
            <div className="todo-item-action"><span className="material-symbols-outlined">delete</span></div>
        </motion.div>
    )
}
