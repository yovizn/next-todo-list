'use client'

import { useTodoStore } from '@/store/todoStore'
import { useState } from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList() {
    const [input, setInput] = useState('')
    const { addTodo, todos } = useTodoStore()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input.trim()) return

        const form = e.currentTarget
        const formData = new FormData(form)
        const { title } = Object.fromEntries(formData)

        if (typeof title !== 'string') return

        addTodo(title)
        setInput('')
    }

    return (
        <div className='py-10 w-full'>
            <div className='mx-auto max-w-screen-lg flex flex-col justify-between items-center h-screen'>
                <div className='flex flex-col items-center h-1/2 w-full border rounded border-zinc-600 bg-zinc-800 overflow-y-auto overflow-x-hidden px-4 py-2'>
                    {todos.map((todo, idx) => (
                        <ToDoItem
                            key={idx}
                            id={todo.id}
                            title={todo.title}
                            complete={todo.complete}
                        />
                    ))}
                </div>

                <div className='w-full h-1/2 py-4'>
                    <h3>Add Todo</h3>
                    <form
                        id='todo-form'
                        onSubmit={handleSubmit}
                        className='grid gap-4 py-4'
                    >
                        <label className='relative block w-full'>
                            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 448 512'
                                    className='size-4 fill-zinc-400 stroke-none'
                                >
                                    <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
                                </svg>
                            </span>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                id='title'
                                name='title'
                                type='text'
                                placeholder='Add ToDo...'
                                className='w-full text-zinc-200 bg-zinc-800 border border-zinc-700 focus:ring-0 focus:outline-none py-2 pl-8 pr-2 rounded'
                            />
                        </label>
                        <div>
                            <button
                                type='submit'
                                className='uppercase px-4 py-2 bg-zinc-200 text-black rounded hover:bg-zinc-400 transition-all duration-300'
                            >
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
