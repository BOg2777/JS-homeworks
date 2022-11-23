import React, { useState } from "react";


import styles from './styles.module.css'

function Header({ setTodos, todos }) {
    const [valueInput, setValueInput] = useState('');
    function addTitleToDo() {
        if (valueInput === '') {
            alert('Please fill out the task')
        } else {
            setTodos((arr) => [
                {
                    _id: new Date(),
                    valueInput,
                    isCompleted: false
                },
                ...arr,
            ])
            setValueInput('')
        }
    }

    return (
            <div className={styles.create_new_todo}>
                <h1 className={styles.text}>ToDo list</h1>
                <input type="text" className={styles.input} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                <button onClick={() => addTitleToDo()} className={styles.btn}>Довавить</button>
            </div>
    )
}
export default Header