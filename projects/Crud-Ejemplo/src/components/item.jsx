import React, { useState, useRef, useEffect } from 'react'
import { ListaPrueba } from './list'
import { v4 as uuid } from 'uuid'



const llave = window.localStorage.getItem('data-llave')

export function Item() {
    const [todos, setTodos] = useState([]);
    const taskRef = useRef();


    useEffect(() => {
        const storedTodos = JSON.parse(llave);
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('data-llave', JSON.stringify(todos));
    }, [todos])





    const agregarTarea = () => {
        console.log("Agregando tarea")
        const task = taskRef.current.value;

        if (task === '') return;

        setTodos((prevTodos) => {
            const newTask = {
                id: uuid(),
                task: task,
                completed: false
            }



            return [...prevTodos, newTask]
        })

        taskRef.current.value = null
    }

    const ResumenTareas = () => {
        const cant = cantidadTareas()
        if (cant === 0) {
            return (
                <div className='alert alert-success mt-3'>
                    Felicitaciones no tienes tareas pendientes!
                </div>
            )
        }
        if (cant === 1) {
            return (
                <div className='alert alert-info mt-3'>Te queda solamente una  tarea pendiente</div>
            )
        }
        return (
            <div className='alert alert-info mt-3'> te quedan {cant} tareas pendientes</div>
        )
    }

    const cantidadTareas = () => {
        return todos.filter((todo) => !todo.completed).length;
    }

    const cambiarEstado = (id) => {
        console.log(id)
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed;
        setTodos(newTodos)
    }

    const eliminarTareas = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }


    return (
        <>
            <h1>Listado de tareas</h1>
            <div className='input-group mt-4 mb-4'>
                <input ref={taskRef} placeholder='Ingresa una tarea' className='form-control' type="text" />
                <button onClick={agregarTarea} className='btn btn-success ms-3'>Agregar</button>
                <button onClick={eliminarTareas} className='btn btn-danger ms-2'>Eliminar</button>
            </div>

            <ul className='list-group'>
                {todos.map((todo) => (
                    <ListaPrueba todo={todo} key={todo.id} cambiarEstado={cambiarEstado}></ListaPrueba>
                ))}
            </ul>

            <ResumenTareas />
        </>
    )
}
