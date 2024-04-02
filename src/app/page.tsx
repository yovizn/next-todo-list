import ToDoList from '@/components/ToDoList'

export default function Home() {
    return (
        <main className='min-h-screen w-full max-w-screen-2xl mx-auto overflow-hidden bg-gradient-to-br to-zinc-900 from-zinc-700 text-white'>
            <section className='container mx-auto'>
                <div className='w-full h-24 flex items-center justify-center'>
                    <h1 className='font-medium text-5xl'>Chores ToDo List</h1>
                </div>
                <div className='min-h-screen w-full flex items-center justify-center'>
                    <ToDoList />
                </div>
            </section>
        </main>
    )
}
