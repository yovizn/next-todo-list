import { TTaskTodo, useTodoStore } from '@/store/todoStore'
import React from 'react'

export default function ToDoItem(props: TTaskTodo) {
    const { complete, id, title } = props
    const { completeTodo, removeTodo } = useTodoStore()

    return (
        <li className='w-full flex items-center'>
            <div className='w-full flex items-center justify-between'>
                <label className='flex items-center gap-4 rounded py-2 px-1'>
                    <input
                        type='checkbox'
                        onChange={(e) => completeTodo(id, e.target.checked)}
                        checked={complete}
                        className='appearance-none size-6 border rounded checked:bg-green-500 checked:border-green-500 transition-all duration-300 hover:bg-green-500/50 checked:hover:bg-green-500 checked:'
                    />
                    <span
                        className={`${
                            complete
                                ? 'line-through text-zinc-600'
                                : 'text-zinc-100'
                        } overflow-hidden text-wrap line-clamp-1`}
                    >
                        {title}
                    </span>
                </label>

                <span
                    onClick={() => removeTodo(id)}
                    className='block p-1 border border-red-600 rounded hover:bg-red-950 transition-all duration-300'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                        className='size-4 fill-red-500 stroke-none hover:fill-red-400 transition-all duration-300'
                    >
                        <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
                    </svg>
                </span>
            </div>
        </li>
    )
}
