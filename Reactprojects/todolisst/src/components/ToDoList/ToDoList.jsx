import React from 'react'

import styles from './styles.module.css';


function ToDoList ({todo}) {
    return (
        <div>
                <input className={styles.title}  value={todo.valueInput} type="text" readOnly />
        </div>
    )
}

export default ToDoList