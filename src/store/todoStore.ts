import { create } from 'zustand'

export type TTaskTodo = {
    id: number
    title: string
    complete: boolean
}

export type TStateTodo = {
    todos: TTaskTodo[]
}

export type TActionTodo = {
    addTodo: (title: string) => void
    removeTodo: (id: number) => void
    completeTodo: (id: number, complete: boolean) => void
}

export const useTodoStore = create<TStateTodo & TActionTodo>()((set) => ({
    todos: [],
    addTodo: (input: string) => {
        const title = input.charAt(0).toUpperCase() + input.slice(1)

        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: state.todos.length + 1,
                    title,
                    complete: false,
                },
            ],
        }))
    },
    removeTodo: (id: number) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    completeTodo: (id: number, complete: boolean) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, complete } : todo
            ),
        })),
}))
