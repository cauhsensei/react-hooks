import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskTest("")

                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }
    }

    const [taskText, setTaskTest] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id })

    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>numero: {number}</p>
        <button onClick={dispatch}>Alterar numero!</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={(e) => setTaskTest(e.target.value)} 
                value={taskText}
            />
            <input type="submit" value="Enviar"/>
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>

        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer